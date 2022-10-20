import React from 'react';
import { PortableText } from '@portabletext/react';
import myPortableTextComponents from '@lib/portablet-text-component';
import Media from '@modules/media';

export default function Project({
  title,
  body,
  mainMedia,
  ...props
}) {
  console.log(props);
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <Media {...mainMedia} />
        <PortableText
          value={body}
          components={myPortableTextComponents}
        />
      </header>
    </article>
  );
}
