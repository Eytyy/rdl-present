export default {
  type: 'object',
  title: 'Media',
  name: 'mediaModule',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Video', value: 'video' },
          { title: 'Image', value: 'image' },
        ],
      },
      initialValue: 'image',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'imageModule',
      hidden: ({ parent }) => parent.type !== 'image',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'videoModule',
      hidden: ({ parent }) => parent.type !== 'video',
    },
    { name: 'caption', title: 'Caption', type: 'string' },
    { name: 'alt', title: 'Alt', type: 'string' },
    {
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          { title: 'Square', value: 'square' },
          { title: 'Landscape', value: 'landscape' },
        ],
      },
      initialValue: 'landscape',
    },
  ],
};
