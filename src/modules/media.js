/** @jsxImportSource theme-ui */
import Module from '.';

export default function Media({ caption, ...props }) {
  return (
    <div sx={{ variant: 'media' }}>
      <div sx={{ variant: 'media.block' }}>
        <Module {...props} />
      </div>
      <div sx={{ variant: 'media.caption' }}>
        <div sx={{ variant: 'media.caption.text' }}>{caption}</div>
      </div>
    </div>
  );
}
