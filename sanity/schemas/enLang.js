export default {
  name: "en",
  title: "EN",
  type: "document",
  fields: [
    {
      name: "header",
      title: "Header",
      type: "object",
      fields: [
        {
          name: "getInTouch",
          title: "GET IN TOUCH",
          type: "string",
        },
        {
          name: "cv",
          title: "CV",
          type: "string",
        },
        {
          name: "enFlag",
          title: "EN Flag",
          type: "image",
        },
        {
          name: "trFlag",
          title: "TR Flag",
          type: "image",
        },
      ],
    },
    {
      name: "main",
      title: "Main",
      type: "object",
      fields: [
        {
          name: "typewriter",
          title: "Typewriter",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "buttons",
          title: "Button",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "smallImage",
          title: "SmallImage",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "about",
      title: "About",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "infoTitle",
          title: "İnfo Title",
          type: "string",
        },
        {
          name: "infoText",
          title: "İnfo Text",
          type: "string",
        },
        {
          name: "bigImage",
          title: "Big Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "projects",
      title: "Projects",
      type: "object",
      fields: [
        {
          name: "project",
          title: "Project",
          type: "array",
          of: [
            {
              type: "reference",
              to: [{ type: "project" }],
            },
          ],
        },
        {
          name: "bigText",
          title: "Big Text",
          type: "string",
        },
        {
          name: "smallText",
          title: "Small Text",
          type: "string",
        },
        {
          name:"tech",
          title:"Tech Used",
          type:"string"
        }
      ],
    },
    {
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        {
          name: "bigText",
          title: "Big Text",
          type: "string",
        },
        {
          name: "smallText",
          title: "Small Text",
          type: "string",
        },
        {
          name: "mail",
          title: "Mail",
          type: "string",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
