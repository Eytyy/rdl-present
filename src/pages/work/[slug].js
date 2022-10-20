import Project from '@components/work/Project';
import { projectQuery } from '@lib/queries';
import { getClient } from '@lib/sanity.server';
import React from 'react';

export default function ProjectPage({ data }) {
  return <Project {...data.page} />;
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == 'project' && defined(slug)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = await getClient().fetch(projectQuery, {
    slug: params.slug,
  });
  return { props: { data } };
}
