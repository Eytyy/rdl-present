import React from 'react';
import ContentModule from './content';
import ImageModule from './image';
import VideoModule from './video';

function renderModule({ _type, ...props }) {
  switch (_type) {
    case 'imageModule':
      return <ImageModule image={props.image} />;
    case 'videoModule':
      return <VideoModule {...props.video} />;
    case 'contentModule':
      return <ContentModule {...props} />;
    default:
      return <div>Unsupported Module</div>;
  }
}
export default function Module({ _type, ...props }) {
  return <div>{renderModule({ _type, ...props })}</div>;
}
