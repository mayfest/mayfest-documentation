import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Mayfest Productions Documentation Website",
  tagline: "Documentation website for Mayfest Productions projects",
  favicon: "img/favicon.ico",
  url: "https://mayfest-documentation.github.io",
  baseUrl: "/mayfest-documentation/",
  organizationName: "mayfest-documentation",
  projectName: "mayfest-documentation",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs/mayfest-productions-core",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.mayfest-core.ts"),
          editUrl:
            "https://github.com/mayfest-documentation/mayfest-documentation/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        blog: false,
        pages: false,
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "dillo-day-platforms",
        path: "docs/dillo-day-platforms",
        routeBasePath: "dillo-day-platforms",
        sidebarPath: require.resolve("./sidebars.dillo-day-platforms.ts"),
        editUrl:
          "https://github.com/mayfest-documentation/mayfest-documentation/tree/main/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "learning-resources",
        path: "docs/learning-resources",
        routeBasePath: "learning-resources",
        sidebarPath: require.resolve("./sidebars.learning-resources.ts"),
        editUrl:
          "https://github.com/mayfest-documentation/mayfest-documentation/tree/main/",
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Mayfest Docs",
      logo: {
        alt: "Mayfest Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Mayfest Productions Core",
        },
        {
          type: "docSidebar",
          sidebarId: "dillo-day-platforms",
          docsPluginId: "dillo-day-platforms",
          position: "left",
          label: "Dillo Day Platforms",
        },
        {
          type: "docSidebar",
          sidebarId: "learning-resources",
          docsPluginId: "learning-resources",
          position: "left",
          label: "Learning Resources",
        },
        {
          href: "https://github.com/mayfest-documentation/mayfest-documentation",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/mayfest",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/mayfest-documentation/mayfest-documentation",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mayfest Productions. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
