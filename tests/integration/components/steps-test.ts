import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | steps', function(hooks) {
    setupRenderingTest(hooks);

    test('`currentStep` attribute', async function(assert) {
        this.set('step', 'first');
        // Template block usage:
        await render(hbs`
        {{#steps currentStep=first as |w|}}
          {{#w.step name='first'}}
            <div data-test-first></div>
          {{/w.step}}
          {{#w.step name='second'}}
            <div data-test-second></div>
          {{/w.step}}
        {{/steps}}
      `);

        assert.dom('[data-test-second]').doesNotExist();
    });
});
