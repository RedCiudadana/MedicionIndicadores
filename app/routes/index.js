import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

var Compromisos = EmberObject.extend({
  compromiso: '',
  porcentaje: '',
  tematica: 0
});

export default Route.extend({

  objectizar() {
    var nombresCompromisos = this.modelFor('application').hitos.uniqBy('compromiso').mapBy('compromiso');
    var compromisos = [];

    for (var i = nombresCompromisos.length - 1; i >= 0; i--) {
      var hitosCompromisos = this.modelFor('application').hitos.filterBy('compromiso', nombresCompromisos[i]);
      var sum = 0;
      hitosCompromisos.forEach(function(element) {
        sum +=  parseInt(element.evaluacion);
    });

    sum = sum/hitosCompromisos.length;

    compromisos.push(Compromisos.create({
      compromiso: nombresCompromisos[i],
      porcentaje: sum,
      tematica: hitosCompromisos.get('firstObject').get('tematica')
    }));
    }
    return compromisos;
  },

  model() {
    return this.objectizar();
  }
});
