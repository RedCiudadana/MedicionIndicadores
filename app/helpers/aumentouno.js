import { helper } from '@ember/component/helper';

export function aumentouno(params/*, hash*/) {
  return parseInt(params) + 1;
}

export default helper(aumentouno);
