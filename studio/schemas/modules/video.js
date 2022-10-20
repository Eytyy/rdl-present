export default {
  type: 'object',
  title: 'Video',
  name: 'videoModule',
  fields: [
    { name: 'file', title: 'File', type: 'file' },
    {
      name: 'autoPlay',
      title: 'Auto Play',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'loop',
      title: 'Loop',
      type: 'boolean',
      initialValue: false,
    },
  ],
};
