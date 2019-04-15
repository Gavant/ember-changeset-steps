import LinearStateMachine from 'ember-steps/-private/state-machine/linear';
import { computed } from '@ember/object';

export default class LinearChangesetStateMachine extends LinearStateMachine {
    @computed('transitions.stepTransitions.[]', 'currentStepNode')
    get currentStepIndex() {
        const current = this.currentStepNode;
        if (current) {
            return this.stepTransitions.indexOf(current);
        } else {
            return 0;
        }
    }
}
