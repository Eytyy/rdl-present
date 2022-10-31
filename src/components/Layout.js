/** @jsxImportSource theme-ui */
import Header from './Header';

export default function Layout({ children, data }) {
  return (
    <section sx={{ variant: 'layout' }}>
      <Header menu={data.mainMenu} />
      <main>{children}</main>
    </section>
  );
}
