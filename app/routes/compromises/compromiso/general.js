import Route from '@ember/routing/route';
import { A } from '@ember/array';
import ArrayProxy from '@ember/array/proxy';

export default Route.extend({
  model(params) {
    var compromiso = ArrayProxy.create({ content: A(this.modelFor('compromises')) }).findBy('id', parseInt(params.compromiso_id));
    var hitosDeCompromiso = this.modelFor('application').hitos.filterBy('compromiso', compromiso.compromiso).reverse();
    var noMetas = hitosDeCompromiso.length;
    var metasAtrasadas = hitosDeCompromiso.filterBy('estado','tarde').length;
    var metasProceso = hitosDeCompromiso.filterBy('estado','incompleto').length;
    var metasCompletadas = hitosDeCompromiso.filterBy('estado','completo').length;
    return {
      compromiso: compromiso,
      hitosDeCompromiso: hitosDeCompromiso,
      textoTwitter: 'Conoce todo sobre el compromiso de '+ compromiso.compromiso,
      informacionCompromiso: {
        noMetas: noMetas,
        metasAtrasadas: metasAtrasadas,
        metasProceso: metasProceso,
        metasCompletadas: metasCompletadas
      }
    };
  }
});
