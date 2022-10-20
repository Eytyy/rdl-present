import React from 'react';

import { getClient } from '@lib/sanity.server';
import { aboutQuery } from '@lib/queries';

import SEO from '@components/SEO';
import About from '@components/singletons/about';

export default function AboutPage({ data }) {
  if (!data) return null;
  return (
    <>
      <SEO title="RDL" description="Reusable Designed Logic" />
      <About {...data.page} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(aboutQuery);
  return { props: { data } };
}
