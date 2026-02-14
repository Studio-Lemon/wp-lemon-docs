# wp-lemon Documentation

Official documentation for **wp-lemon** - your go-to WordPress theme framework for creating good looking and lean websites.

## 📚 About

This repository contains the documentation for wp-lemon, built with [Docusaurus](https://docusaurus.io/). The documentation covers everything from setup and basic usage to advanced topics like custom blocks, hooks, and extending functionality.

**View the live documentation:** [https://studio-lemon.github.io/wp-lemon-docs/](https://studio-lemon.github.io/wp-lemon-docs/)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

This will start a local development server at `http://localhost:3000` with live reloading.

### Build

Build the static site:

```bash
npm run build
```

The static files will be generated in the `build` directory.

### Serve Built Site

Preview the built site locally:

```bash
npm run serve
```

## 📝 Contributing to Documentation

We welcome contributions to improve the documentation! This section explains how to write and structure documentation for wp-lemon.

### Documentation Structure

Documentation files are organized in the `docs/` directory:

```
docs/
├── index.mdx                    # Homepage
├── requirements.mdx             # System requirements
├── setup.mdx                    # Setup guide
├── getting-started.mdx          # Getting started guide
├── basics/                      # Basic concepts
├── blocks/                      # Block development
├── working-with-posts/          # Post types and taxonomies
├── extend/                      # Extending functionality
├── reference/                   # API reference (auto-generated)
└── migrations/                  # Migration guides
```

### Writing Documentation

1. **Create a new file**: Add a `.mdx` file in the appropriate directory
2. **Add frontmatter**: Include title and optional description

```mdx
---
title: "Your Page Title"
description: Optional description for SEO
---

# Your Content Here

Write your documentation using Markdown/MDX syntax.
```

3. **Update sidebar**: Add your new page to `sidebars.ts`

```typescript
{
  type: 'category',
  label: 'Your Category',
  items: [
    'path/to/your-file',
  ],
}
```

### Auto-Generated Documentation

Some documentation is automatically generated from the wp-lemon codebase and synced to this repository. These files should **not be edited manually** as they will be overwritten.

#### The Sync Script

The [`sync-helper-functions.js`](./sync-helper-functions.js) script synchronizes generated markdown files from the `generated/` directory into the `docs/reference/` directory. This ensures that API documentation is always up-to-date.

**How it works:**

1. Generated markdown files are created by tools in the main wp-lemon repository
2. These files are placed in the `generated/` directory
3. The sync script reads these files and copies them to `docs/reference/`
4. The script applies formatting fixes and adds proper frontmatter
5. The resulting `.mdx` files are ready for Docusaurus

**Running the sync script:**

```bash
npm run sync-docs
```

The sync script runs automatically during the build process (via `prebuild` script).

**Files managed by sync script:**

- API Functions: `generated/helper-functions.md` → `docs/reference/helper-functions.mdx`
- Query Functions: `generated/query-functions.md` → `docs/reference/query-functions.mdx`
- JavaScript Functions: `generated/javascript.md` → `docs/reference/javascript-functions.mdx`
- Hooks: `generated/hooks/*.md` → `docs/reference/hooks/*.mdx`
- Classes: `generated/reference/*.md` → `docs/reference/classes/*.mdx`
- Twig: `generated/twig-*.md` → `docs/reference/twig-*.mdx`

See [SYNC-DOCS.md](./SYNC-DOCS.md) for more details about the sync process.

### Style Guidelines

- Use clear, concise language
- Include code examples where appropriate
- Use proper Markdown formatting
- Add links to related documentation
- Use admonitions for important notes:

```mdx
:::tip
Helpful tip here
:::

:::warning
Warning message here
:::

:::danger
Critical warning here
:::
```

## 🛠 Technology Stack

- **[Docusaurus](https://docusaurus.io/)** - Documentation framework
- **[React](https://reactjs.org/)** - UI framework
- **[MDX](https://mdxjs.com/)** - Markdown with JSX support
- **[Prism](https://prismjs.com/)** - Syntax highlighting

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details

## 🤝 Support

- [GitHub Issues](https://github.com/Studio-Lemon/wp-lemon-docs/issues)
- [Main wp-lemon Repository](https://github.com/Studio-Lemon/wp-lemon)

---

Built with ❤️ by Studio Lemon
