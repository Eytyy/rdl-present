import React from 'react';

import { contactquery } from '@lib/queries';
import { getClient } from '@lib/sanity.server';

import SEO from '@components/SEO';
import Contact from '@components/singletons/contact';

export default function ContactPage({ data }) {
  if (!data) return null;
  return (
    <>
      <SEO title="RDL" description="Reusable Designed Logic" />
      <Contact {...data.page} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(contactquery);
  return { props: { data } };
}
