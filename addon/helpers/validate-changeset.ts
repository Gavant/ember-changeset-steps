import { helper } from '@ember/component/helper';
import { reject, resolve } from 'rsvp';

export function validateChangeset([changeset]: any, options: any) {
    const { then } = options;
    return function() {
        return changeset.validate().then(() => {
            if (changeset.isInvalid) {
                return reject();
            } else {
                return resolve(then());
            }
        });
    };
}

export default helper(validateChangeset);
