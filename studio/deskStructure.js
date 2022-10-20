import S from '@sanity/desk-tool/structure-builder';
import blog from './structure/blog';
import pages from './structure/pages';
import settings from './structure/settings';
import work from './structure/work';

const excluded = [
  'about',
  'contact',
  'home',
  'post',
  'author',
  'tag',
  'blogSettings',
  'workSettings',
  'project',
  'menu',
];

export default () =>
  S.list()
    .title('Content')
    .items([
      pages,
      work,
      blog,
      S.divider(),
      settings,
      ...S.documentTypeListItems().filter(
        (listItem) => !excluded.includes(listItem.getId())
      ),
    ]);
