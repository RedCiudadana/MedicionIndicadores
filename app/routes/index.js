import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

var Hito = EmberObject.extend({
    id: '',
    hito: '',
    compromisos: '',
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
  objectizar(list) {
    var resultado = [];
    for (var i = list.length - 1; i >= 0; i--) {
      var obj = list[i];
      var obj2 = Hito.create({
        id: obj.id,
        hito: obj.hito,
        compromisos: obj.compromisos,
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

  model: function() {
    var application = this.objectizar(this.modelFor('application'));
    return application.filterBy('tematica', 'Acceso Informacion Publica');
  }
});
