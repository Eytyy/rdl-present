/** @jsxImportSource theme-ui */
import { PortableText } from '@portabletext/react';
import myPortableTextComponents from '@lib/portablet-text-component';

export default function Post({ title, body, ...props }) {
  console.log(props);
  return (
    <article>
      <header>
        <h1 sx={{ variant: 'text.pageTitle' }}>{title}</h1>
      </header>
      <PortableText
        value={body}
        components={myPortableTextComponents}
      />
    </article>
  );
}
