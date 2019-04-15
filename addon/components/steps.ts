import StepManager from 'ember-steps/components/step-manager';
// @ts-ignore: Ignore import of compiled template
import layout from 'ember-changeset-steps/templates/components/steps';
import { getProperties, set } from '@ember/object';
import { isPresent, isNone } from '@ember/utils';
import LinearChangesetStateMachine from 'ember-changeset-steps/-private/state-machine/linear';

export default class Steps extends StepManager {
    layout = layout;
    transitions!: LinearChangesetStateMachine;
    /*
     * We want to use our `LinearChangesetStateMachine`. That gives us the ability to access the currently step index `currentStepIndex`
     * To allow that, we override the init function for the `StepManager` from `ember-steps` and set our `StateMachine` to `transitions`
     */
    init() {
        super.init();
        const { initialStep, currentStep } = getProperties(this, 'initialStep', 'currentStep');

        this._watchCurrentStep = isPresent(currentStep);
        const startingStep = isNone(initialStep) ? currentStep : initialStep;
        const StateMachine = LinearChangesetStateMachine;

        set(this, 'transitions', StateMachine.create({ currentStep: startingStep }));
    }
}
