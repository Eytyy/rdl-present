import React from 'react';

import SEO from '@components/SEO';

import { getClient } from '@lib/sanity.server';
import { blogQuery } from '@lib/queries';
import Blog from '@components/blog';

export default function BlogPage({ data }) {
  if (!data) return null;

  const { page } = data;
  return (
    <>
      <SEO title={page.title} />
      <Blog {...data} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(blogQuery);
  return { props: { data } };
}
