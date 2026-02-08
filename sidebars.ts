import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    'requirements',
    'setup',
    'getting-started',
    {
      type: 'category',
      label: 'Basics',
      items: [
        'basics/customizer',
        'basics/logos',
        'basics/favicons-manifest',
        'basics/basic-styling',
        'basics/basic-javascript',
        'basics/fonts',
      ],
    },
    {
      type: 'category',
      label: 'Blocks',
      items: [
        'blocks/key-concepts',
        'blocks/create-block',
        'blocks/block-declaration',
        'blocks/block-controller',
        'blocks/block-view',
        'blocks/block-style',
        'blocks/block-js',
        'blocks/innerblocks',
        'blocks/disabling-blocks',
      ],
    },
    {
      type: 'category',
      label: 'Working with posts',
      items: [
        'working-with-posts/post-type-registration',
        'working-with-posts/extending-post-objects',
        'working-with-posts/using-post-objects',
      ],
    },
    {
      type: 'category',
      label: 'Extend',
      items: [
        'extend/add-context',
        'extend/acf-fields',
        'extend/hooks',
        'extend/icon-picker',
        'extend/special-pages',
        'extend/customizer-fields',
        'extend/cards',
        'extend/internationalization',
        'extend/plugins',
      ],
    },
    {
      type: 'category',
      label: 'Overwrite',
      items: [
        'overwrite/twig-files',
        'overwrite/styles',
      ],
    },
    {
      type: 'category',
      label: 'Twig',
      items: [
        'reference/twig-functions',
        'reference/twig-filters',
        'reference/twig-macros',
      ],
    },
    {
      type: 'category',
      label: 'API function',
      items: [
        'reference/api-functions',
        'reference/query-functions',
        'reference/javascript-functions',
      ],
    },
    {
      type: 'category',
      label: 'Hooks',
      items: [
        'reference/hooks/filters',
        'reference/hooks/actions',
      ],
    },
    {
      type: 'category',
      label: 'Classes',
      items: [
        'reference/classes/generic-ajax-query',
        'reference/classes/wp-lemon-site',
        'reference/classes/lemon-post',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'deployment/initial-deploy',
        'deployment/updates',
      ],
    },
    {
      type: 'category',
      label: 'Migration guides',
      items: [
        'migrations/4-5',
        'migrations/3-4',
        'migrations/2-3',
      ],
    },
    {
      type: 'category',
      label: 'More',
      items: [
        'changelog/index',
      ],
    },
  ],
};

export default sidebars;
