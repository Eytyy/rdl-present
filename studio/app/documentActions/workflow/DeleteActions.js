import React from 'react';
import { useDocumentOperation } from '@sanity/react-hooks';
import { TrashIcon } from '@sanity/icons';
import {
  inferMetadataState,
  useWorkflowMetadata,
} from '../../lib/workflow';
import { getCurrentUser$ } from '../../lib/user';
import { useObservable } from '../../lib/utils';

export function DeleteAction(props) {
  const source = getCurrentUser$();
  const user = useObservable(source);

  const [showDialog, setShowDialog] = React.useState(false);

  const ops = useDocumentOperation(props.id, props.type);

  const metadata = useWorkflowMetadata(
    props.id,
    inferMetadataState(props)
  );

  const onHandle = () => {
    if (ops.delete.disabled) {
      props.onComplete();
      return;
    }

    if (!showDialog) {
      setShowDialog(true);
      return;
    }

    setShowDialog(false);
    metadata.delete();
    ops.delete.execute();
    props.onComplete();
  };

  return {
    dialog: showDialog && {
      type: 'confirm',
      message: <div>Are you sure you want to delete?</div>,
      onConfirm: onHandle,
      onCancel: () => setShowDialog(false),
    },
    disabled: ops.delete.disabled,
    icon: TrashIcon,
    shortcut: 'mod+shift+d',
    label: 'Delete',
    color: 'danger',
    onHandle,
  };
}
