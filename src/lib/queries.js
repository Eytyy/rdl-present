export const metaFields = `
  "title": meta_title,
  "description": meta_description,
  "image": meta_image
`;

export const projectQuery = `
 *[_type == 'project' && defined(slug) && slug.current == $slug][0] {
    title, body, "slug": slug.current,
    seo {
      ${metaFields}
    },
    "mainMedia": {
      "type": mainMediaType,
      "style": mainMediaStyle,
      mainMediaType == 'video' => {
        "video": { "autoPlay": mainVideo.autoPlay, "loop": mainVideo.loop, "url": mainVideo.file.asset->.url }
      },
      mainMediaType == 'image' => {
        'image': mainImage
      },
    }
  }
`;

export const otherProjects = `
 "projects": *[_type == 'project' && defined(slug) && slug.current != $slug] | order(year desc) {
    _type, _id, title, "slug": slug.current
  }
`;

export const allProjects = `
  "projects": *[_type == 'project'] | order(year desc) {
    _type, _id, title, "slug": slug.current
}`;

export const allPosts = `
  "posts": *[_type in ["post"]] | order(_createdAt asc) {
    _id, _type, "slug": slug.current, title, publishedAt,
  }
`;

export const navQuery = `
  ${allProjects},
  ${allPosts}
`;
