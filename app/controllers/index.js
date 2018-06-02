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
        .filter((element) => {
          if (this.get('transparenciaFiscal') && element.tematica == 'Transparencia Fiscal') {
            return true;
          }

          if (this.get('rendicionCuenta') && element.tematica == 'Rendición De Cuentas') {
            return true;
          }

          if (this.get('participacionCiudadana') && element.tematica == 'Participación Ciudadana') {
            return true;
          }

          if (this.get('innovacionTecnologica') && element.tematica == 'Innovación Tecnológica') {
            return true;
          }

          if (this.get('accesoInformacionPublica') && element.tematica == 'Acceso Informacion Publica') {
            return true;
          }

          return false;
        })
    }
  )
});
