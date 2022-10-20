import { MdOutlineLink } from 'react-icons/md';

export default {
  name: 'pageLink',
  title: 'Link',
  type: 'object',
  icon: MdOutlineLink,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'reference',
      to: [
        { type: 'home' },
        { type: 'about' },
        { type: 'contact' },
        { type: 'workSettings' },
        { type: 'blogSettings' },
      ],
    },
  ],
};
