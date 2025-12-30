# Documentation Sync Script

## Problem

The documentation files in `src/docs/reference/` were importing generated markdown files as React components. This prevented Gatsby from parsing the headings in those files for the table of contents.

```mdx
// ❌ This doesn't work for table of contents
import Functions from "../../generated/helper-functions.md";
<Functions />
```

## Solution

The `sync-helper-functions.js` script converts all reference documentation files from using imports to directly embedding the generated content. This allows Gatsby to properly parse all headings and include them in the table of contents.

```mdx
// ✅ This works - content is directly in the file
### get_constant()
Get constant value...
```

## Usage

Run the sync script after regenerating any documentation files:

```bash
node sync-helper-functions.js
```

## Files Managed by the Script

The script syncs the following files:

| Generated Source | Reference Destination |
|-----------------|----------------------|
| `src/generated/helper-functions.md` | `src/docs/reference/api-functions.mdx` |
| `src/generated/query-functions.md` | `src/docs/reference/query-functions.mdx` |
| `src/generated/javascript.md` | `src/docs/reference/javascript-functions.mdx` |
| `src/generated/hooks/filters.md` | `src/docs/reference/hooks/filters.mdx` |
| `src/generated/hooks/actions.md` | `src/docs/reference/hooks/actions.mdx` |
| `src/generated/reference/wp_lemon-classes-lemonpost.md` | `src/docs/reference/classes/lemon-post.mdx` |
| `src/generated/reference/wp_lemon-classes-generic_ajax_query.md` | `src/docs/reference/classes/generic-ajax-query.mdx` |
| `src/generated/reference/wp_lemon-classes-wp_lemon_site.md` | `src/docs/reference/classes/wp-lemon-site.mdx` |

## How It Works

1. Reads each generated markdown file from `src/generated/`
2. Adds appropriate frontmatter (title, description)
3. Adds optional intro text
4. Writes the complete content to the corresponding `.mdx` file in `src/docs/reference/`

## Adding New Files

To add a new file to the sync process, edit `sync-helper-functions.js` and add a new entry to the `FILE_MAPPINGS` array:

```javascript
{
  source: 'src/generated/your-file.md',
  dest: 'src/docs/reference/your-file.mdx',
  frontmatter: {
    title: 'Your Title',
    description: 'Optional description'
  },
  introText: 'Optional intro text'
}
```

## Note

The `.mdx` files in `src/docs/reference/` are **generated files** and should not be manually edited. Any manual changes will be overwritten the next time the sync script runs.
