import Link from 'next/link';
import React from 'react';

export default function Header({ menu }) {
  return (
    <header style={{ padding: '62px' }}>
      <MainMenu items={menu.items} />
    </header>
  );
}

function MainMenu({ items }) {
  return (
    <nav style={{ display: 'flex', gap: '24px' }}>
      {items.map((item) => (
        <DLink key={item._key} {...item} />
      ))}
    </nav>
  );
}

// Default Link
function DLink({ _type, ...props }) {
  switch (_type) {
    case 'pageLink':
      return <PLink {...props} />;
    default:
      return <div>unsupported</div>;
  }
}

// Page Link
function PLink({ title, url, type }) {
  const href = type === 'home' ? '/' : `/${url}`;
  return (
    <Link href={href} passHref>
      <a>{title}</a>
    </Link>
  );
}
