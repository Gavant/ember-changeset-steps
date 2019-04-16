import { helper } from '@ember/component/helper';
import { reject } from 'rsvp';

export function saveChangeset([changeset]: any, options: any) {
    const { then } = options;
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
