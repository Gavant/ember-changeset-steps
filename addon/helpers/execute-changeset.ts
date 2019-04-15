import { helper } from '@ember/component/helper';
import { reject } from 'rsvp';

/*
 * A helper to execute the changeset and then call the function passed into `then`
 *
 * @param changeset - Changeset to validate
 * @param options - options hash that has what to do after the changeset is validated
 */
export function executeChangeset([changeset]: any, options: any) {
    const { then } = options;
    return function() {
        return changeset.validate().then(() => {
            if (changeset.isInvalid) {
                return reject();
            } else {
                changeset.execute();
                return then();
            }
        });
    };
}

export default helper(executeChangeset);
