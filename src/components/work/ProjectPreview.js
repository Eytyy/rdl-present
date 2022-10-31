/** @jsxImportSource theme-ui */
import Link from 'next/link';

export default function ProjectPreview({ title, slug }) {
  return (
    <article>
      <h2 sx={{ variant: 'text.previewHeadline' }}>
        <Link href={`/work/${slug}`}>{title}</Link>
      </h2>
    </article>
  );
}
