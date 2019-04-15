import { helper } from '@ember/component/helper';

export function inc(params: Array<number> /*, hash*/) {
    return params[0] + 1;
}

export default helper(inc);
