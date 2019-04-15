import { helper } from '@ember/component/helper';

export function gt(params: Array<number> /*, hash*/) {
    return params[0] > params[1];
}

export default helper(gt);
