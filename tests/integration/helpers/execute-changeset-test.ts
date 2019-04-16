import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import { validatePresence } from 'ember-changeset-validations/validators';

const Validations = {
    name: [validatePresence(true)]
};

module('Integration | Helper | execute-changeset', function(hooks) {
    setupRenderingTest(hooks);

    test('`then` is called', async function(assert) {
        this.set('thenCalled', false);
        this.set('testAction', () => {
            this.set('thenCalled', true);
        });
        this.set('changeset', new Changeset({ name: 'Emma' }, lookupValidator(Validations), Validations as any));

        await render(hbs`
            <button {{action (execute-changeset changeset then=(action this.testAction))}}>
                Validate
            </button>
        `);
        await click('button');
        assert.equal(this.get('thenCalled'), true);
    });

    test('`then` is not called', async function(assert) {
        this.set('thenCalled', false);
        this.set('testAction', () => {
            this.set('thenCalled', true);
        });
        this.set('changeset', new Changeset({ name: '' }, lookupValidator(Validations), Validations as any));

        await render(hbs`
            <button {{action (execute-changeset changeset then=(action this.testAction))}}>
                Validate
            </button>
        `);
        await click('button');
        assert.equal(this.get('thenCalled'), false);
    });
});
