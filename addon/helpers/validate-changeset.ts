import { helper } from '@ember/component/helper';
import { reject, resolve } from 'rsvp';

export function validateChangeset([parameters]: any) {
    const { changeset, transition } = parameters;
    return function() {
        return changeset.validate().then(() => {
            if (changeset.isInvalid) {
                return reject();
            } else {
                return resolve(transition());
            }
        });
    };
}

export default helper(validateChangeset);
