import Route from '@ember/routing/route';
import { A } from '@ember/array';
import ArrayProxy from '@ember/array/proxy';

export default Route.extend({
  model(params) {
    return  ArrayProxy.create({ content: A(this.modelFor('compromises')) }).findBy('id', parseInt(params.id));
  }
});
