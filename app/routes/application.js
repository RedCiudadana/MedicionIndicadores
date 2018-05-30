import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import Tabletop from 'tabletop';
import { isNone } from '@ember/utils';
import EmberObject from '@ember/object';

var hito = EmberObject.extend({
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

    getData(sheet) {
        return new RSVP.Promise((resolve, reject) => {
            Tabletop.init({ 
                key: '1dbhg6zy-8GzuYL5PQUt-YveC78vP72f-zI6e0dBLogk', 
                callback: (data) => {
                    if (isNone(data[sheet])) {
                        reject('Sheet inexistente');
                    }
                    resolve(
                        data[sheet].elements
                        );
                },
            });
        })
        .catch((error) => {
            console.log('Ha ocurrido un error');
            console.log(error);
        });
    },

    model() {
        return this.getData('hitos');
    }
});
