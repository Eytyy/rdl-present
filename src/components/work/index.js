/** @jsxImportSource theme-ui */
import ProjectPreview from './ProjectPreview';

export default function WorkDisplay({ content, page }) {
  return (
    <section>
      <header sx={{ variant: 'page.header' }}>
        <h1 sx={{ variant: 'text.pageTitle' }}>{page.title}</h1>
      </header>
      <main>
        <div sx={{ variant: 'list' }}>
          {content.map((project) => (
            <ProjectPreview key={project._id} {...project} />
          ))}
        </div>
      </main>
    </section>
  );
}
