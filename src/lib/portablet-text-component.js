import ImageModule from '@modules/image';

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="inlineImg">
          <ImageModule image={value} />
        </div>
      );
    },
  },
};

export default myPortableTextComponents;
