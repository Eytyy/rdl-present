import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import post from './documents/post';
import author from './documents/author';
import category from './documents/category';
import blockContent from './objects/blockContent';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, author, category, blockContent]),
});
