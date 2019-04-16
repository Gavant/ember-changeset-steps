import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | inc', function(hooks) {
    setupRenderingTest(hooks);

    test('Increment works', async function(assert) {
        this.set('inputValue', 1);

        await render(hbs`{{inc inputValue}}`);
        let element = this.element.textContent;
        assert.equal(element && element.trim(), '2');
    });
});
