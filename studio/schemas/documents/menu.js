import { MdMoreHoriz } from 'react-icons/md';

export default {
  type: 'document',
  title: 'Menu',
  name: 'menu',
  icon: MdMoreHoriz,
  __experimental_actions: ['create', 'delete', 'update', 'publish'],

  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'Main Menu',
      hidden: true,
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{ type: 'pageLink' }],
    },
  ],
};
