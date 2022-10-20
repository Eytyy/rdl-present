export default {
  type: 'document',
  title: 'Project',
  name: 'project',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'Project Title',
    },
    {
      title: 'Main Image/Video',
      name: 'mainMedia',
      type: 'mediaModule',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    },
  ],
};
