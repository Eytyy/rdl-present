export default {
  type: 'document',
  title: 'Contact',
  name: 'contact',
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
      initialValue: '',
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
