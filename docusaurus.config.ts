import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'murknit3 | Cybersecurity Write-Ups',
  tagline: 'Detection • DFIR • Threat Hunting • Offensive Security',
  favicon: 'img/favicon.svg',
  url: 'https://murknit3.github.io',
  baseUrl: '/cyber-writeups/',
  organizationName: 'murknit3',
  projectName: 'cyber-writeups',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'writeups',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'murknit3',
      items: [
        {to: '/writeups/intro', label: 'Write-Ups', position: 'left'},
        {to: '/writeups/category/knowledge-base', label: 'Knowledge Base', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {
          href: 'https://github.com/murknit3',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {label: 'Write-Ups', to: '/writeups/intro'},
            {label: 'Knowledge Base', to: '/writeups/category/knowledge-base'},
          ],
        },
        {
          title: 'Elsewhere',
          items: [
            {label: 'GitHub', href: 'https://github.com/murknit3'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} murknit3. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'bash', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
