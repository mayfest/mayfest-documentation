import type { SidebarsConfig } from "@docusaurus/plugin-content-docs/lib/sidebars/types.js";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Main Overview",
      items: [
        {
          type: "doc",
          id: "overview/timeline",
          label: "Technology Team Timeline",
        },
        {
          type: "doc",
          id: "overview/recuitment",
          label: "Recruitment",
        },
        {
          type: "doc",
          id: "overview/planning",
          label: "Planning, Organization, and Coordination",
        },
        {
          type: "doc",
          id: "overview/deliverables",
          label: "Main Deliverables and Responsibilities",
        },
        {
          type: "doc",
          id: "overview/the-future",
          label: "The Future of the Technology Team",
        },
      ],
    },
    {
      type: "category",
      label: "Releasing The Dillo Day Mobile App",
      items: [
        {
          type: "doc",
          id: "app/intro",
          label: "Introduction",
        },
        {
          type: "category",
          label: "iOS",
          items: [
            {
              type: "doc",
              id: "app/ios/building-ios",
              label: "Building for ios",
            },
            {
              type: "doc",
              id: "app/ios/submitting",
              label: "Submitting to the App Store",
            },
            {
              type: "doc",
              id: "app/ios/testing",
              label: "[IOS] Testing the App on your Phone"
            },
            {
              type: "doc",
              id: "app/ios/debugging",
              label: "[IOS] Common Mistakes and Debugging"
            }
          ],
        },
        {
          type: "category",
          label: "Android",
          items: [
            {
              type: "doc",
              id: "app/android/building",
              label: "Building for Android",
            },
            {
              type: "doc",
              id: "app/android/submit",
              label: "Submitting to Google Play"
            },
            {
              type: "doc",
              id: "app/android/testing",
              label: "[ANDROID] Testing the App on your Phone"
            },
            {
              type: "doc",
              id: "app/android/debugging",
              label: "[ANDROID} Common Mistakes and Debugging"
            }
          ],
        },
      ],
    },
  ],
};


export default sidebars
