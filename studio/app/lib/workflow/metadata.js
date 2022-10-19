import {
  useDocumentOperation,
  useEditState,
} from '@sanity/react-hooks';

// helper hook to access workflow.metdata document operations
export function useWorkflowMetadata(id, defaultState) {
  const metaID = `workflow-metadata.${id}`;
  const metaType = 'workflow.metadata';
  const editState = useEditState(metaID, metaType);
  const ops = useDocumentOperation(metaID, metaType);

  const data =
    editState && editState.published
      ? editState.published
      : {
          _id: `workflow-metadata.${id}`,
          _type: 'workflow.metadata',
          state: defaultState,
        };

  return {
    data,
    delete: deleteMetadata,
    setState,
  };

  function deleteMetadata() {
    ops.delete.execute();
  }

  function setState(state) {
    ops.patch.execute([
      { setIfMissing: { documentId: id } },
      { set: { state } },
    ]);
  }
}
