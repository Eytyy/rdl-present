import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import menu from './documents/menu';
import project from './documents/project';
import post from './documents/post';
import author from './documents/author';
import tag from './documents/tag';

import about from './singletons/about';
import contact from './singletons/contact';
import home from './singletons/home';

import blockContent from './objects/blockContent';
import pageLink from './objects/pageLink';
import blog from './settings/blog';
import work from './settings/work';
import media from './modules/media';
import image from './modules/image';
import video from './modules/video';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    home,
    about,
    contact,
    blog,
    work,

    project,
    post,
    author,
    tag,
    menu,

    blockContent,
    pageLink,

    media,
    image,
    video,
  ]),
});
