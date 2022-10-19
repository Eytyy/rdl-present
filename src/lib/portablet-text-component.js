import ImageModule from '@components/modules/image';

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="inlineImg">
          <ImageModule {...value} />
        </div>
      );
    },
  },
};

export default myPortableTextComponents;
