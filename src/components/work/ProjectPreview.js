import Link from 'next/link';
import React from 'react';

export default function ProjectPreview({ title, slug }) {
  return <Link href={`/work/${slug}`}>{title}</Link>;
}
