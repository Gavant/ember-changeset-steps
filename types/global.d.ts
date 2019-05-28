// Types for compiled templates
declare module '@gavant/ember-changeset-steps/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
