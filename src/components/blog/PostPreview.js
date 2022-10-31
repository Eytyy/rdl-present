/** @jsxImportSource theme-ui */
import Link from 'next/link';

export default function PostPreview({
  title,
  slug,
  publishedAt,
  author,
  tags,
}) {
  return (
    <div>
      <div sx={{ variant: 'text.smallText' }}>
        On: {publishedAt}
        <br />
        By: {author.name}
      </div>
      <h2 sx={{ variant: 'text.previewHeadline' }}>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>
    </div>
  );
}
