import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | gt', function(hooks) {
    setupRenderingTest(hooks);

    test('Greater than returns correctly', async function(assert) {
        this.set('inputValue', 1);
        this.set('inputValue2', 2);

        await render(hbs`{{gt inputValue inputValue2}}`);
        let element = this.element.textContent;
        assert.equal(element && element.trim(), 'false');
    });
});
