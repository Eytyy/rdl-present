import { useDocumentOperation } from '@sanity/react-hooks';
import { PublishIcon } from '@sanity/icons';
import {
  inferMetadataState,
  useWorkflowMetadata,
} from '../../lib/workflow';

export function PublishAction(props) {
  const ops = useDocumentOperation(props.id, props.type);
  const metadata = useWorkflowMetadata(
    props.id,
    inferMetadataState(props)
  );

  if (props.liveEdit || metadata.data.state === 'published') {
    return null;
  }

  const onHandle = () => {
    if (ops.publish.disabled) {
      props.onComplete();
      return;
    }

    metadata.setState('published');
    ops.publish.execute();
    props.onComplete();
  };

  return {
    disabled: ops.publish.disabled,
    icon: PublishIcon,
    shourtcut: 'mod+shift+p',
    label: 'Publish',
    onHandle,
  };
}
