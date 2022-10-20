import React from 'react';
import PostPreview from './PostPreview';

export default function Blog({ page, content }) {
  return (
    <section>
      <header>
        <h1>{page.title}</h1>
      </header>
      <main>
        {content.map((post) => (
          <PostPreview key={post._id} {...post} />
        ))}
      </main>
    </section>
  );
}
