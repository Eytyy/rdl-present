import userStore from 'part:@sanity/base/user';
import { defer, from } from 'rxjs';

export function getCurrentUser() {
  return userStore.getCurrentUser();
}

export function getCurrentUser$() {
  return defer(() => from(getCurrentUser()));
}
