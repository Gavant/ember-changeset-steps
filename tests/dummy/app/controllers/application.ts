import Controller from '@ember/controller';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import UserValidations from '../validations/user';
import { action } from '@ember/object';
export default class Application extends Controller.extend({
    // anything which *must* be merged to prototype here
}) {
    changeset: any;
    UserValidations = UserValidations;
    changeset1: Changeset;
    changeset2: Changeset;
    constructor() {
        super();
        const model = {
            name: null
        };
        this.model = model;
        this.changeset1 = new Changeset(model, lookupValidator(UserValidations), UserValidations as any);
        this.changeset2 = new Changeset(model, lookupValidator(UserValidations), UserValidations as any);
    }

    @action
    submitForm() {}
    // normal class body definition here
    @action
    finish() {
        console.log('In finish wizard');
    }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
    interface Registry {
        application: Application;
    }
}
