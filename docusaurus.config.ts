import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Mayfest Productions Documentation Website",
  tagline: "Documentation website for Mayfest Productions projects",
  favicon: "img/dillo.png",
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
          id: "mayfest-productions-core",
          path: "docs/mayfest-productions-core",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.mayfest-core.ts"),
          editUrl:
            "https://github.com/mayfest-documentation/mayfest-documentation/tree/main",
        },
        blog: false,
        pages: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
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
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "learning-resources",
        path: "docs/learning-resources",
        routeBasePath: "learning-resources",
        sidebarPath: require.resolve("./sidebars.learning-resources.ts"),
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Mayfest Docs",
      logo: {
        alt: "Mayfest Logo",
        src: "img/dillo.png",
        href: "https://www.dilloday.com/",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Mayfest Productions Core",
          docsPluginId: "mayfest-productions-core",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Dillo Day Platforms",
          docsPluginId: "dillo-day-platforms",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Learning Resources",
          docsPluginId: "learning-resources",
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
          title: "Documentation",
          items: [
            {
              label: "Mayfest Productions Core",
              to: "/",
            },
            {
              label: "Dillo Day Platforms",
              to: "/dillo-day-platforms/intro",
            },
            {
              label: "Learning Resources",
              to: "/learning-resources/intro",
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
      copyright: `Copyright © ${new Date().getFullYear()} Mayfest Productions`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
