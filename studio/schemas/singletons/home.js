export default {
  type: 'document',
  title: 'Home',
  name: 'home',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'Home',
      // hidden: true,
    },
    {
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    },
  ],
};
