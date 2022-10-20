import { groq } from 'next-sanity';

// Common
export const navQuery = `
 *[ _type == 'menu' && _id == "mainMenu" ][0] {
    items[] {
      title, _type, _key,
      _type == 'pageLink' => {
        "url": link->.slug.current,
        "type": link->._type
      }
    }
  }
`;
const slug = `"slug": slug.current`;

export const metaFields = `
  "title": meta_title,
  "description": meta_description,
  "image": meta_image
`;

const media = `mainMedia {
  format, alt, caption,
  type == 'image' => { "_type": "imageModule", "image": image.image },
  type == 'video' => {
    "_type": "videoModule",
    "video": { "autoPlay": video.autoPlay, "loop": video.loop, "url": video.file.asset->.url }
  }
}`;

// Content

// post/[slug]
export const postQuery = `{
  "page": *[_type == 'post' && defined(slug) && slug.current == $slug][0] {
    title, body, ${slug},
     seo {
      ${metaFields}
    },
  },
  "mainMenu": ${navQuery}
}`;

// project/[slug]
export const projectQuery = `{
  "page": *[_type == 'project' && defined(slug) && slug.current == $slug][0] {
    title, body, "slug": slug.current,
    "mainMedia": ${media}
  },
  "mainMenu": ${navQuery}
}`;

// ... all
export const otherProjects = `
 "projects": *[_type == 'project' && defined(slug) && slug.current != $slug] | order(year desc) {
    _type, _id, title, "slug": slug.current
  }
`;

export const allProjectsQuery = `*[_type == 'project'] {
  _id,
  title,
  mainImage,
  ${slug},
  body,
}`;

export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt asc) {
    _id, title, ${slug},
    author-> { name, image, bio, ${slug}},
    body, publishedAt,
    tags[]->{_id, title, ${slug}}
  }
`;

// Pages
export const homeQuery = `{
  "page": *[_type == "home"][0],
  "mainMenu": ${navQuery}
}`;

export const aboutQuery = `{
  "page": *[_type == "about"][0],
  "mainMenu": ${navQuery}
}`;

export const contactquery = `{
  "page": *[_type == "contact"][0],
  "mainMenu": ${navQuery}
}`;

export const workQuery = `{
  "page": *[_type == "workSettings"][0],
  "content": ${allProjectsQuery},
  "mainMenu": ${navQuery}
}`;

export const blogQuery = `{
  "page": *[_type == "blogSettings"][0],
  "content": ${allPostsQuery},
  "mainMenu": ${navQuery}
}`;
