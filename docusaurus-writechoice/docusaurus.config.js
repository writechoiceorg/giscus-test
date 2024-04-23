// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    // [
    //   require.resolve('@cmfcmf/docusaurus-search-local'),
    //   {
    //     indexBlog: false,
    //   },
    // ],
    require.resolve('docusaurus-plugin-image-zoom'),
    'docusaurus-plugin-sass',
  ],

  title: 'WriteChoice BoilerPlate',
  tagline: 'WriteChoice BoilerPlate',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/writechoice_logo.jpg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it's often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'writechoice', // Usually your GitHub org/user name.
  projectName: 'docusaurus-boilerplate-writechoice', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // colorMode: {
      //   defaultMode: 'light',
      //   disableSwitch: true,
      //   respectPrefersColorScheme: false,
      // },
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Boilerplate',
        logo: {
          alt: 'Site Logo',
          src: 'img/writechoice_logo.jpg',
          className: 'site_logo',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
            activeBaseRegex: "/$",
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'docs',
          //   position: 'left',
          //   label: 'Tutorial',
          //   to: '/tutorial',
          // },
          {
            to: 'tutorial',
            label: 'Tutorial',
            position: 'left',
            activeBaseRegex: "/tutorial",
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/orgs/writechoiceorg/',
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
                label: 'Home',
                to: '/',
              },
              {
                label: 'Tutorial',
                to: '/tutorial',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/write.choice/',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/write-choice-technical-writing-services/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/orgs/writechoiceorg',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
