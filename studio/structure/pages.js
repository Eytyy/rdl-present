import S from '@sanity/desk-tool/structure-builder';
import { MdHome } from 'react-icons/md';

const about = S.documentListItem()
  .schemaType('about')
  .title('About')
  .child(
    S.document()
      .schemaType('about')
      .documentId('about')
      .views([S.view.form()])
  );

const contact = S.documentListItem()
  .schemaType('contact')
  .title('Contact')
  .child(
    S.document()
      .schemaType('contact')
      .documentId('contact')
      .views([S.view.form()])
  );

const home = S.documentListItem()
  .schemaType('home')
  .title('Home')
  .child(
    S.document()
      .schemaType('home')
      .documentId('home')
      .views([S.view.form()])
  );

const pages = S.listItem()
  .title('Pages')
  .icon(MdHome)
  .child(S.list().title('Pages').items([home, about, contact]));

export default pages;
