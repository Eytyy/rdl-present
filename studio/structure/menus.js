import S from '@sanity/desk-tool/structure-builder';

export const main = S.documentListItem()
  .schemaType('menu')
  .title('Main Menu')
  .child(
    S.document()
      .schemaType('menu')
      .documentId('mainMenu')
      .views([S.view.form()])
  );
