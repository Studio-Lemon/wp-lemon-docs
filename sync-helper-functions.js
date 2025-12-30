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
 * Configuration mapping source files to their destination
 * Each entry contains:
 * - source: path to the generated markdown file
 * - dest: path to the reference MDX file
 * - frontmatter: YAML frontmatter for the destination file
 * - introText: Optional intro text before the content
 */
const FILE_MAPPINGS = [
   {
      source: 'src/generated/helper-functions.md',
      dest: 'src/docs/reference/api-functions.mdx',
      frontmatter: {
         title: 'Helper Functions'
      },
      introText: 'The following function documentation is automatically generated.'
   },
   {
      source: 'src/generated/query-functions.md',
      dest: 'src/docs/reference/query-functions.mdx',
      frontmatter: {
         title: 'Query Functions'
      },
      introText: 'The following function documentation is automatically generated.'
   },
   {
      source: 'src/generated/javascript.md',
      dest: 'src/docs/reference/javascript-functions.mdx',
      frontmatter: {
         title: 'JavaScript Functions'
      },
      introText: 'The following function documentation is automatically generated.'
   },
   {
      source: 'src/generated/hooks/filters.md',
      dest: 'src/docs/reference/hooks/filters.mdx',
      frontmatter: {
         title: 'Filter hooks reference',
         description: 'PHP Filters of wp-lemon'
      },
      introText: 'The following filter documentation is automatically generated.'
   },
   {
      source: 'src/generated/hooks/actions.md',
      dest: 'src/docs/reference/hooks/actions.mdx',
      frontmatter: {
         title: 'Action hooks reference',
         description: 'PHP Actions of wp-lemon'
      },
      introText: 'The following filter documentation is automatically generated.'
   },
   {
      source: 'src/generated/reference/wp_lemon-classes-lemonpost.md',
      dest: 'src/docs/reference/classes/lemon-post.mdx',
      frontmatter: {
         title: 'LemonPost',
         description: 'LemonPost class'
      },
      introText: null
   },
   {
      source: 'src/generated/reference/wp_lemon-classes-generic_ajax_query.md',
      dest: 'src/docs/reference/classes/generic-ajax-query.mdx',
      frontmatter: {
         title: 'Generic_Ajax_Query',
         description: 'Generic_Ajax_Query class'
      },
      introText: null
   },
   {
      source: 'src/generated/reference/wp_lemon-classes-wp_lemon_site.md',
      dest: 'src/docs/reference/classes/wp-lemon-site.mdx',
      frontmatter: {
         title: 'WP_Lemon_Site',
         description: 'WP_Lemon_Site class'
      },
      introText: null
   }
];

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
   const sourceContent = fs.readFileSync(sourcePath, 'utf8');

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
