import S from '@sanity/desk-tool/structure-builder';
import { MdTune, MdFormatListBulleted, MdStar } from 'react-icons/md';

const projects = S.listItem()
  .title('Projects')
  .icon(MdFormatListBulleted)
  .child(
    S.documentTypeList('project')
      .title('Projects')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('project')
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) && type === 'project'
      )
  );

const settings = S.documentListItem()
  .id('workSettings')
  .icon(MdTune)
  .title('Settings')
  .schemaType('workSettings');

const work = S.listItem()
  .title('Work')
  .icon(MdStar)
  .child(S.list().title('Work').items([settings, projects]));

export default work;
