import { DeleteAction } from './DeleteActions';
import { PublishAction } from './PublishAction';
import { UnpublishAction } from './Unpublish';

export function resolveWorkflowActions(/* docInfo */) {
  return [PublishAction, UnpublishAction, DeleteAction];
}
