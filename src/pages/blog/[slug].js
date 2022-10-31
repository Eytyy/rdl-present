import Post from '@components/blog/Post';
import { postQuery } from '@lib/queries';
import { getClient } from '@lib/sanity.server';
import React from 'react';

export default function PostPage({ data }) {
  return <Post {...data.page} />;
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == 'post' && defined(slug)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = await getClient().fetch(postQuery, {
    slug: params.slug,
  });
  return { props: { data } };
}
