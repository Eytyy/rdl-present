export default {
  type: 'document',
  title: 'Blog',
  name: 'blogSettings',
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
      initialValue: 'Blog',
      hidden: true,
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      readOnly: true,
    },
  ],
};
