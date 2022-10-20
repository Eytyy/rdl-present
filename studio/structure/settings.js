import S from '@sanity/desk-tool/structure-builder';
import { main } from './menus';
import { MdTune } from 'react-icons/md';

const settings = S.listItem()
  .title('Site Settings')
  .icon(MdTune)
  .child(S.list().title('Site Settings').items([main]));

export default settings;
