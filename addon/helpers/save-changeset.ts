import { helper } from '@ember/component/helper';
import { reject } from 'rsvp';

export function saveChangeset([parameters]: any) {
    const { changeset, then } = parameters;
    return function() {
        return changeset.validate().then(() => {
            if (changeset.isInvalid) {
                return reject();
            } else {
                return changeset.save().then(() => {
                    then();
                });
            }
        });
    };
}

export default helper(saveChangeset);
