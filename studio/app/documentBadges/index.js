import defaultResolver from 'part:@sanity/base/document-badges';

import HelloWorldBadge from './HelloWorldBadge';
export default function resolveDocumentBadges(props) {
  return [...defaultResolver(props), HelloWorldBadge];
}
