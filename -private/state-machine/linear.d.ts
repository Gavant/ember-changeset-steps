import LinearStateMachine from 'ember-steps/-private/state-machine/linear';
export default class LinearChangesetStateMachine extends LinearStateMachine {
    readonly currentStepIndex: number;
}
