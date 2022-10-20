import React from 'react';
import { PortableText } from '@portabletext/react';
import myPortableTextComponents from '@lib/portablet-text-component';

export default function About({ title, body }) {
  return (
    <section>
      <h1>{title}</h1>
      <PortableText
        value={body}
        components={myPortableTextComponents}
      />
    </section>
  );
}
