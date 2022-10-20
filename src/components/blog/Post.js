import React from 'react';
import { PortableText } from '@portabletext/react';
import myPortableTextComponents from '@lib/portablet-text-component';

export default function Post({ title, body, ...props }) {
  console.log(props);
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <PortableText
          value={body}
          components={myPortableTextComponents}
        />
      </header>
    </article>
  );
}
