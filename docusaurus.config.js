// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation de THEMERYS Pro',
  tagline: 'Toutes les principales fonctionnalités de l\'application',
  favicon: 'https://themeryspro.com/wp-content/uploads/2022/11/cropped-logo_themerys_pro_icone-192x192.png',

  // Set the production url of your site here
  url: 'https://m-tower.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/themerys-pro-doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'M-tower', // Usually your GitHub org/user name.
  projectName: 'themerys-pro-doc', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/M-tower/themerys-pro-doc',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Tous les articles',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'THEMERYS Pro',
        logo: {
          alt: 'Logo',
          src: 'https://themeryspro.com/wp-content/uploads/2022/11/cropped-logo_themerys_pro_icone-192x192.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/M-tower/themerys-pro-doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutoriel',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Facebook',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Instagram',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Linkedin',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Liens Utiles',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/M-tower/themerys-pro-doc',
              },
              {
                label: 'Site web officiel',
                href: 'https://themeryspro.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} THEMERYS Pro, By ARTHEMYS Technology`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
