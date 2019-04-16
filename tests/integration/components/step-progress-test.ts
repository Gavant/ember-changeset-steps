import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | step-progress', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });
        this.set('manager', {
            transitions: {
                currentStepIndex: 0,
                stepTransitions: [
                    {
                        name: 'Step 1',
                        isActive: true
                    }
                ]
            }
        });
        await render(hbs`{{step-progress manager=manager}}`);
        let element = this.element.textContent;
        assert.equal(element && element.replace(/\s/g, ''), '1Step1');

        // Template block usage:
        await render(hbs`
      {{#step-progress manager=manager}}
        template block text
      {{/step-progress}}
    `);
        element = this.element.textContent;
        assert.equal(element && element.replace(/\s/g, ''), 'templateblocktextStep1');
    });
});
