/** @jsxImportSource theme-ui */

import SEO from '@components/SEO';

import { getClient } from '@lib/sanity.server';
import { workQuery } from '@lib/queries';
import WorkDisplay from '@components/work';

export default function Blog({ data }) {
  if (!data) return null;
  const { page } = data;
  return (
    <>
      <SEO title={page.title} />
      <WorkDisplay {...data} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(workQuery);
  return { props: { data } };
}
