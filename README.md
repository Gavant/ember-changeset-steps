[![Build Status](https://travis-ci.org/Gavant/ember-changeset-steps.svg?branch=master)](https://travis-ci.org/Gavant/ember-changeset-steps)
[![npm version](https://badge.fury.io/js/ember-changeset-steps.svg)](https://badge.fury.io/js/ember-changeset-steps)
[![Ember Observer Score](http://emberobserver.com/badges/ember-changeset-steps.svg)](http://emberobserver.com/addons/ember-changeset-steps)

# ember-changeset-steps

This addon uses `ember-steps` to give step/wizard functionality using `ember-changeset` & `ember-changeset-validation`.

## Compatibility

-   Ember.js v3.6 or above
-   Ember CLI v3.6 or above

## Installation

```
ember install @gavant/ember-changeset-steps
```

## Usage

```
<Steps as |Manager|>
    <Manager.progress />
    <Manager.step>
        {{input placeholder="First Name" value=this.changeset.firstName}}
        <button onclick={{execute-changeset this.changeset then=(action Manager.transition-to-next)}}>
            Next Step
        </button>
    </Manager.step>
    <Manager.step>
        {{input placeholder="Last Name" value=this.changeset.lastName}}
        <button onclick={{action Manager.transition-to-previous}}>
            Previous Step
        </button>
        <button onclick={{execute-changeset this.changeset then=(action this.finish)}}>
            Finish
        </button>
    </Manager.step>
</Steps>
```

Provided for ease of use are three helpers.

1. `execute-changeset`
   This helper executes the changeset and then calls what is passed to `then`

2. `save-changeset`
   This helper saves the changeset. Once that promise returns, the helper calls `then`

3. `validate-changeset`
   This helper validates the changeset and then calls what is passed to `then`

You don't have to use any of them, because they are just convenience helpers. Instead you can just do

```
<Manager.step>
    {{input placeholder="Last Name" value=this.changeset.lastName}}

    <button onclick={{action Manager.transition-to-previous}}>
        Previous Step
    </button>
    <button onclick=(action 'validateStep' Manager.transition-to-next)}}>
        Next Step
    </button>
</Manager.step>
```

and in a controller or component do

```
export default class Application extends Controller {
    ...
    @action
    async validateStep(transition) {
        await this.changeset.validate();
        if(changeset.isInvalid) {
            return reject();
        } else {
            this.changeset.execute();
            transition();
        }
    }
}
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
