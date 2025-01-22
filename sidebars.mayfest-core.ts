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
      label: "Mayfest Mailing App",
      items: [
        { type: "doc", id: "mayfest-mail/overview", label: "Overview" },
        { type: "doc", id: "mayfest-mail/setup", label: "Setup" },
        { type: "doc", id: "mayfest-mail/usage", label: "Usage Guide" },
        { type: "doc", id: "mayfest-mail/deployment", label: "Deployment" },
      ],
    },
    {
      type: "category",
      label: "mayfestproductions.com",
      items: [
        { type: "doc", id: "mayfest-website/overview", label: "Overview" },
        {
          type: "doc",
          id: "mayfest-website/development-guide",
          label: "Development Guide",
        },
        { type: "doc", id: "mayfest-website/deployment", label: "Deployment" },
      ],
    },
    {
      type: "category",
      label: "bio.dilloday.com",
      items: [
        { type: "doc", id: "bio-site/overview", label: "Overview" },
        { type: "doc", id: "bio-site/configuration", label: "Configuration" },
        { type: "doc", id: "bio-site/deployment", label: "Deployment" },
      ],
    },
    {
      type: "category",
      label: "bio.dilloday-editor.com",
      items: [
        { type: "doc", id: "bio-editor/overview", label: "Overview" },
        { type: "doc", id: "bio-editor/deployment", label: "Deployment" },
        { type: "doc", id: "bio-editor/collaboration", label: "Collaboration" },
      ],
    },
  ],
};

export default sidebars;
