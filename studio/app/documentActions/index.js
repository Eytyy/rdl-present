import defaultResolver from 'part:@sanity/base/document-actions';
import { types as workflowTypes } from '../config/workflow';
import { resolveWorkflowActions } from './workflow';

// If the document type is listed in the workflow types array return the workflow actions
// otherwise retur the default actions
export default function resolveDocumentActions(props) {
  // if (workflowTypes.includes(props.type)) {
  //   return resolveWorkflowActions(props);
  // }
  return defaultResolver(props);
}
