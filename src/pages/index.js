import SEO from '@components/SEO';
import { homeQuery } from '@lib/queries';
import { getClient } from '@lib/sanity.server';
import HomePage from '@components/HomePage';

export default function Home({ data }) {
  if (!data) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <SEO title="RDL" description="Reusable Designed Logic" />
      <HomePage {...data.page} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(homeQuery);
  return { props: { data } };
}
