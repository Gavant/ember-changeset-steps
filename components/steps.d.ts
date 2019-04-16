import StepManager from 'ember-steps/components/step-manager';
import LinearChangesetStateMachine from 'ember-changeset-steps/-private/state-machine/linear';
export default class Steps extends StepManager {
    layout: import("htmlbars-inline-precompile").TemplateFactory;
    transitions: LinearChangesetStateMachine;
    init(): void;
}
