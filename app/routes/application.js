import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import Tabletop from 'tabletop';
import { isNone } from '@ember/utils';
import EmberObject from '@ember/object';

var Hito = EmberObject.extend({
  id: '',
  hito: '',
  compromiso: '',
  tematica: '',
  entidad: '',
  categoria: '',
  inicio: '',
  final: '',
  estado: '',
  evaluacion: '',
  analisis: ''
});

export default Route.extend({

  getData(sheet) {
    return new RSVP.Promise((resolve, reject) => {
      Tabletop.init({ 
        key: '1dbhg6zy-8GzuYL5PQUt-YveC78vP72f-zI6e0dBLogk', 
        callback: (data) => {
          if (isNone(data[sheet])) {
            reject('Sheet inexistente');
          }
          resolve(
            this.objectizar(data[sheet].elements)
            );
        },
      });
    })
    .catch((error) => {
      console.log('Ha ocurrido un error');
      console.log(error);
    });
  },

  objectizar(list) {
    var resultado = [];
    for (var i = list.length - 1; i >= 0; i--) {
      var obj = list[i];
      var obj2 = Hito.create({
        id: obj.id,
        hito: obj.hito,
        compromiso: obj.compromiso,
        tematica: obj.tematica,
        entidad: obj.entidad,
        categoria: obj.categoria,
        inicio: obj.inicio,
        final: obj.final,
        estado: obj.estado,
        evaluacion: obj.evaluacion,
        analisis: obj.analisis
      });
      resultado.push(obj2);
    }
    return resultado
  },

  model() {
    return RSVP.hash({
      hitos: this.getData('hitos')
    });
  }
});
