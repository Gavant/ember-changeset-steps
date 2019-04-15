import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | steps', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`{{steps}}`);
        let element = this.element.textContent;
        assert.equal(element && element.trim(), '');

        // Template block usage:
        await render(hbs`
      {{#steps}}
        template block text
      {{/steps}}
    `);
        element = this.element.textContent;
        assert.equal(element && element.trim(), 'template block text');
    });
});
