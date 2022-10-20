import Module from '.';

export default function Media({ caption, ...props }) {
  return (
    <div>
      {caption}
      <Module {...props} />
    </div>
  );
}
