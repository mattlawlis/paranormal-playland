export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611e6c0263958a0bfcc1a139",
                  title: "Sanity Studio",
                  name: "paranormal-playland-studio",
                  apiId: "2ab3210d-43c1-476d-9e09-9f01fc911858",
                },
                {
                  buildHookId: "611e6c02857266085e7baec2",
                  title: "Blog Website",
                  name: "paranormal-playland",
                  apiId: "b6e4ed5f-7665-4c2d-aebc-2ffec28d0980",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mattlawlis/paranormal-playland",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://paranormal-playland.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
