module.exports = {
  title: 'Catalog',
  description: 'Just playing around',
  themeConfig: {
    logo: '/horizontal-logo.png',
    search: false,
    lastUpdated: 'Last Updated',
    editLinks: true,
    repo: 'amitnovick/catalog',
    docsDir: 'docs',
    docsRepo: 'amitnovick/catalog-docs',
    nav: [],
    sidebar: [
      {
        title: 'Guides',
        children: ['/getting-started', '/categories']
      }
    ]
  }
};
