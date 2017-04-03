
import { GET } from '../utils';

export function getList() {
  return GET('TODO: set url', {}).then(result => {
    return result;
  });
}
