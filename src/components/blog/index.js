/** @jsxImportSource theme-ui */
import PostPreview from './PostPreview';

export default function Blog({ page, content }) {
  return (
    <section>
      <header sx={{ variant: 'page.header' }}>
        <h1 sx={{ variant: 'text.pageTitle' }}>{page.title}</h1>
      </header>
      <main>
        <div sx={{ variant: 'list' }}>
          <h2 sx={{ variant: 'text.sectionTitle' }}>List</h2>
          {content.map((post) => (
            <PostPreview key={post._id} {...post} />
          ))}
        </div>
      </main>
    </section>
  );
}
