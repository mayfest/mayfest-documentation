import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Dillo Day Website",
      items: [
        {
          type: "doc",
          id: "dilloday-website/overview",
          label: "Overview",
        },
        {
          type: "doc",
          id: "dilloday-website/development-guide",
          label: "Development Guide",
        },
        {
          type: "doc",
          id: "dilloday-website/deployment",
          label: "Deployment",
        },
      ],
    },
    {
      type: "category",
      label: "Dillo Day Mobile App",
      items: [
        {
          type: "doc",
          id: "dillo-app/overview",
          label: "Overview",
        },
        {
          type: "doc",
          id: "dillo-app/setup",
          label: "Local Development Setup",
        },
        {
          type: "doc",
          id: "dillo-app/features",
          label: "Feature Overview",
        },
        {
          type: "doc",
          id: "dillo-app/development-guide",
          label: "Development Guide",
        },
        {
          type: "doc",
          id: "dillo-app/deployment",
          label: "Deployment",
        },
      ],
    },
    {
      type: "category",
      label: "Dillo Day CLI Tool",
      items: [
        {
          type: "doc",
          id: "dilloday-cli/overview",
          label: "Overview",
        },
      ],
    },
  ],
};

export default sidebars;
