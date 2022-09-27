export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "projectImage",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectName",
      title: "Project Name",
      type: "string",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "string",
    },
  ],
};
