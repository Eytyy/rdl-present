import React from 'react';
import Header from './Header';

export default function Layout({ children, data }) {
  return (
    <section>
      <Header menu={data.mainMenu} />
      <main style={{ padding: '0px 62px' }}>{children}</main>
    </section>
  );
}
