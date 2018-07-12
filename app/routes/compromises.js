import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

var Compromisos = EmberObject.extend({
  id: 0,
  compromiso: '',
  porcentaje: '',
  tematica: 0,
  embed: '',
  _form: ''
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

    sum = Math.trunc(sum/hitosCompromisos.length);

    compromisos.push(Compromisos.create({
      id: nombresCompromisos.length - i -1,
      compromiso: nombresCompromisos[i],
      porcentaje: sum,
      tematica: hitosCompromisos.get('firstObject').get('tematica'),
      embed: hitosCompromisos.get('firstObject').get('embed'),
      _form: hitosCompromisos.get('firstObject').get('_form'),
      image: hitosCompromisos.get('firstObject').get('tematica').dasherize().normalize('NFD').replace(/[\u0300-\u036f]/g, "") + ".png"
    }));
    }
    return compromisos;
  },

  model() {
    return this.objectizar();
  }
});
