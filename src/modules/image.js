import Img from 'next/image';
import React from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from '@lib/config';

const ImageModule = ({ image, format = 'default' }) => {
  switch (format) {
    case 'square':
      return <SqrdImage image={image} alt={image.alt} />;
    case 'landscape':
      return <LandScape image={image} alt={image.alt} />;
    case 'portrait':
      return <Portrait image={image} alt={image.alt} />;
    default:
      return <OriginalRatio image={image} alt={image.alt} />;
  }
};

function SqrdImage({ image, alt }) {
  const props = useNextSanityImage(sanityConfig, image, {
    imageBuilder: (imgBldr, opts) => {
      const w = opts.width;
      return imgBldr.width(w).height(w);
    },
  });

  if (!props) return null;

  const sizes = `
    (min-width: 66em) 33vw,
    (min-width: 44em) 33vw,
    50vw`;

  return (
    <Img
      {...props}
      alt={alt}
      height={props.width}
      layout="responsive"
      sizes={sizes}
    />
  );
}

const ratio = (w) => Math.floor(w * 0.5625);
function LandScape({ image, alt }) {
  const props = useNextSanityImage(sanityConfig, image, {
    imageBuilder: (imgBldr, opts) => {
      const w = opts.width;
      const h = ratio(w);
      return imgBldr.width(w).height(h);
    },
  });

  if (!props) return null;

  const sizes = `
    (min-width: 66em) 33vw,
    (min-width: 44em) 50vw,
    100vw`;

  return (
    <Img
      {...props}
      alt={alt}
      height={ratio(props.width)}
      layout="responsive"
      sizes={sizes}
    />
  );
}

const pRatio = (w) => Math.floor(w * 1.3333);
function Portrait({ image, alt }) {
  const props = useNextSanityImage(sanityConfig, image, {
    imageBuilder: (imgBldr, opts) => {
      const w = opts.width;
      const h = pRatio(w);
      return imgBldr.width(w).height(h);
    },
  });

  if (!props) return null;

  const sizes = `
    (min-width: 66em) 33vw,
    (min-width: 44em) 50vw,
    100vw`;

  return (
    <Img
      {...props}
      alt={alt}
      height={pRatio(props.width)}
      layout="responsive"
      sizes={sizes}
    />
  );
}

function OriginalRatio({ image, alt }) {
  const props = useNextSanityImage(sanityConfig, image);

  if (!props) return null;

  const sizes = `
    (min-width: 66em) 33vw,
    (min-width: 44em) 50vw,
    100vw`;

  return (
    <Img {...props} alt={alt} layout="responsive" sizes={sizes} />
  );
}

export default ImageModule;
