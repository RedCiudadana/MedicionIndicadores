import Route from '@ember/routing/route';
import { A } from '@ember/array';
import ArrayProxy from '@ember/array/proxy';

export default Route.extend({
  model(params) {
    var compromiso = ArrayProxy.create({ content: A(this.modelFor('compromises')) }).findBy('id', parseInt(params.compromiso_id));
    var hitosDeCompromiso = this.modelFor('application').hitos.filterBy('compromiso', compromiso.compromiso);
    return {
      compromiso: compromiso,
      hitosDeCompromiso: hitosDeCompromiso
    };
  }
});
