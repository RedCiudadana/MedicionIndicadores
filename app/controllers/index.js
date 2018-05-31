import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({
  transparenciaFiscal: true,

  rendicionCuenta: true,

  participacionCiudadana: true,

  innovacionTecnologica: true,

  accesoInformacionPublica: true,

  tematicasList: computed('model', function() {
    return this.get('model')
      .hitos
      .uniqBy('tematica')
      .mapBy('tematica');
  }),


  compromisosFiltradosList: computed(
    'model',
    'transparenciaFiscal',
    'rendicionCuenta',
    'participacionCiudadana',
    'innovacionTecnologica',
    'accesoInformacionPublica',
    function() {
      return this.get('model')
        .hitos
        .filter((element) => {
          if (this.get('transparenciaFiscal') && element.tematica == 'Transparencia Fiscal') {
            return true;
          }

          if (this.get('rendicionCuenta') && element.tematica == 'Rendición De Cuentas') {
            return true;
          }

          return false;
        })
        .uniqBy('compromiso')
        .mapBy('compromiso');
    }
  )
});
