import React from 'react';
import { PortableText } from '@portabletext/react';
import myPortableTextComponents from '@lib/portablet-text-component';

export default function HomePage({ title, body }) {
  return (
    <section>
      HomePage
      <PortableText
        value={body}
        components={myPortableTextComponents}
      />
    </section>
  );
}
