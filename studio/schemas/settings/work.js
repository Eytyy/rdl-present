export default {
  type: 'document',
  title: 'Work',
  name: 'workSettings',
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
      initialValue: 'Work',
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
