import S from '@sanity/desk-tool/structure-builder';
import {
  MdTune,
  MdFormatListBulleted,
  MdArticle,
  MdOutlineMood,
  MdOutlineTag,
} from 'react-icons/md';

const posts = S.listItem()
  .title('Posts')
  .icon(MdFormatListBulleted)
  .child(
    S.documentTypeList('post')
      .title('Posts')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('post')
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) && type === 'post'
      )
  );

const authors = S.listItem()
  .title('Authors')
  .icon(MdOutlineMood)
  .child(
    S.documentTypeList('author')
      .title('Authors')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('author')
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) && type === 'author'
      )
  );

const tags = S.listItem()
  .title('Tags')
  .icon(MdOutlineTag)
  .child(
    S.documentTypeList('tag')
      .title('Tags')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('tag')
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) && type === 'tag'
      )
  );

const settings = S.documentListItem()
  .id('blogSettings')
  .icon(MdTune)
  .title('Settings')
  .schemaType('blogSettings');

const blog = S.listItem()
  .title('Blog')
  .icon(MdArticle)
  .child(
    S.list().title('Blog').items([settings, posts, authors, tags])
  );

export default blog;
