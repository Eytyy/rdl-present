export default {
  type: 'document',
  title: 'About',
  name: 'about',
  __experimental_actions: [
    // 'create', 'delete',
    'update',
    'publish',
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'About',
      // hidden: true,
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      // readOnly: true,
    },
    {
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    },
  ],
};
