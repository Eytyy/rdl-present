import React from 'react';

import SEO from '@components/SEO';

import { getClient } from '@lib/sanity.server';
import { workQuery } from '@lib/queries';
import ProjectPreview from '@components/work/ProjectPreview';

export default function Blog({ data }) {
  if (!data) return null;
  const { page, content } = data;
  return (
    <section>
      <SEO title={page.title} />
      <header>
        <h1>{page.title}</h1>
      </header>
      <main>
        {content.map((project) => (
          <ProjectPreview key={project._id} {...project} />
        ))}
      </main>
    </section>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(workQuery);
  return { props: { data } };
}
