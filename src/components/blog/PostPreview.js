import Link from 'next/link';
import React from 'react';

export default function PostPreview({
  title,
  slug,
  publishedAt,
  author,
  tags,
}) {
  return (
    <div>
      <div>
        Published on {publishedAt} by {author.name}
      </div>
      <h2>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>
    </div>
  );
}
