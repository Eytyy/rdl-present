/** @jsxImportSource theme-ui */
import { PortableText } from '@portabletext/react';
import myPortableTextComponents from '@lib/portablet-text-component';
import Media from '@modules/media';

export default function Project({ title, body, mainMedia }) {
  return (
    <article
      sx={{
        variant: 'layout.main',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8,
      }}
    >
      <div>
        <header sx={{ mb: 4 }}>
          <h1 sx={{ variant: 'text.pageTitle' }}>{title}</h1>
        </header>
        <div sx={{ variant: 'text.body', mt: 5 }}>
          <PortableText
            value={body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
      <Media {...mainMedia} />
    </article>
  );
}
