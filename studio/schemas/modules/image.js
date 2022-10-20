export default {
  type: 'object',
  title: 'Image',
  name: 'imageModule',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: { media: 'image' },
  },
};
