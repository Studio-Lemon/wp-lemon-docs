#!/usr/bin/env node
/**
 * Script to sync all generated markdown files into their respective MDX reference files
 * 
 * This script reads the generated markdown files and merges them into the reference
 * MDX files so that all the headings are properly included in the table of contents.
 * 
 * Run this script after regenerating documentation:
 *   node sync-helper-functions.js
 */

const fs = require('fs');
const path = require('path');

/**
 * Search and replace patterns to apply to all content
 * Add new patterns here - they will be applied in order
 */
const SEARCH_REPLACE_PATTERNS = [
   {
      search: '</p>\n</td>',
      replace: '</p></td>',
      description: 'Remove newline between </p> and </td>'
   },
   {
      search: '<br>',
      replace: '<br/>',
      description: 'Replace <br> with self-closing <br/>'
   },
   {
      search: '## "wp-lemon',
      replace: '## wp-lemon',
      description: 'Remove quote and trailing space from wp-lemon headings'
   },
   {
      search: '\\{\\$',
      replace: '\\{$',
      description: 'escape curly braces in code blocks'
   },
   {
      search: '\\}/',
      replace: '\\}/',
      description: 'escape curly braces in code blocks'
   }
];

/**
 * Configuration mapping source files to their destination
 * Each entry contains:
 * - source: path to the generated markdown file
 * - dest: path to the reference MDX file
 * - frontmatter: YAML frontmatter for the destination file
 * - introText: Optional intro text before the content
 */
const FILE_MAPPINGS = [
   {
      source: 'generated/helper-functions.md',
      dest: 'docs/reference/helper-functions.mdx',
      frontmatter: {
         title: 'Helper Functions'
      },
      introText: 'The following function documentation is automatically generated.'
   },
   {
      source: 'generated/query-functions.md',
      dest: 'docs/reference/query-functions.mdx',
      frontmatter: {
         title: 'Query Functions'
      },
      introText: 'The following function documentation is automatically generated.'
   },
   {
      source: 'generated/javascript.md',
      dest: 'docs/reference/javascript-functions.mdx',
      frontmatter: {
         title: 'JavaScript Functions'
      },
      introText: 'The following function documentation is automatically generated.'
   },
   {
      source: 'generated/hooks/filters.md',
      dest: 'docs/reference/hooks/filters.mdx',
      frontmatter: {
         title: 'Filter hooks reference',
         description: 'PHP Filters of wp-lemon'
      },
      introText: 'The following filter documentation is automatically generated.'
   },
   {
      source: 'generated/hooks/actions.md',
      dest: 'docs/reference/hooks/actions.mdx',
      frontmatter: {
         title: 'Action hooks reference',
         description: 'PHP Actions of wp-lemon'
      },
      introText: 'The following filter documentation is automatically generated.'
   },
   {
      source: 'generated/reference/wp_lemon-classes-lemonpost.md',
      dest: 'docs/reference/classes/lemon-post.mdx',
      frontmatter: {
         title: 'LemonPost',
         description: 'LemonPost class'
      },
      introText: null
   },
   {
      source: 'generated/reference/wp_lemon-classes-generic_ajax_query.md',
      dest: 'docs/reference/classes/generic-ajax-query.mdx',
      frontmatter: {
         title: 'Generic_Ajax_Query',
         description: 'Generic_Ajax_Query class'
      },
      introText: null
   },
   {
      source: 'generated/reference/wp_lemon-classes-wp_lemon_site.md',
      dest: 'docs/reference/classes/wp-lemon-site.mdx',
      frontmatter: {
         title: 'WP_Lemon_Site',
         description: 'WP_Lemon_Site class'
      },
      introText: null
   },
   {
      source: 'generated/twig-macros.md',
      dest: 'docs/reference/twig-macros.mdx',
      frontmatter: {
         title: 'Twig Macros',
         description: 'Twig macros reference'
      },
      introText: 'The following Twig macros documentation is automatically generated.'
   },
   {
      source: 'generated/twig-functions.md',
      dest: 'docs/reference/twig-functions.mdx',
      frontmatter: {
         title: 'Twig Functions',
         description: 'Twig functions reference'
      },
      introText: 'The following Twig functions documentation is automatically generated.'
   },
   {
      source: 'generated/twig-filters.md',
      dest: 'docs/reference/twig-filters.mdx',
      frontmatter: {
         title: 'Twig Filters',
         description: 'Twig filters reference'
      },
      introText: 'The following Twig filters documentation is automatically generated.'
   }
];

/**
 * Apply all search/replace patterns to content
 */
function applySearchReplace(content) {
   let processedContent = content;

   for (const pattern of SEARCH_REPLACE_PATTERNS) {
      const regex = new RegExp(pattern.search, 'g');
      const beforeCount = (processedContent.match(regex) || []).length;
      processedContent = processedContent.replace(regex, pattern.replace);

      if (beforeCount > 0) {
         console.log(`   🔧 Applied: ${pattern.description} (${beforeCount} occurrence(s))`);
      }
   }

   return processedContent;
}

/**
 * Generate YAML frontmatter from an object
 */
function generateFrontmatter(data) {
   const lines = ['---'];
   for (const [key, value] of Object.entries(data)) {
      lines.push(`${key}: ${value}`);
   }
   lines.push('---');
   return lines.join('\n');
}

/**
 * Process a single file mapping
 */
function processFile(mapping) {
   const sourcePath = path.join(__dirname, mapping.source);
   const destPath = path.join(__dirname, mapping.dest);

   // Check if source file exists
   if (!fs.existsSync(sourcePath)) {
      console.log(`⚠️  Skipping ${mapping.source} (file not found)`);
      return false;
   }

   // Read the source content
   let sourceContent = fs.readFileSync(sourcePath, 'utf8');

   // Apply search/replace patterns
   sourceContent = applySearchReplace(sourceContent);

   // Build the destination content
   const parts = [generateFrontmatter(mapping.frontmatter)];

   if (mapping.introText) {
      parts.push('');
      parts.push(mapping.introText);
   }

   parts.push('');
   parts.push(sourceContent);

   const newContent = parts.join('\n');

   // Write to destination
   fs.writeFileSync(destPath, newContent);

   console.log(`✅ Synced ${mapping.source} → ${mapping.dest}`);
   return true;
}

// Process all file mappings
console.log('🔄 Syncing generated documentation files...\n');

let successCount = 0;
let skipCount = 0;

for (const mapping of FILE_MAPPINGS) {
   if (processFile(mapping)) {
      successCount++;
   } else {
      skipCount++;
   }
}

console.log(`\n✨ Done! Synced ${successCount} file(s)${skipCount > 0 ? `, skipped ${skipCount}` : ''}`);
console.log('   The table of contents will now include all headings from the generated files.');
