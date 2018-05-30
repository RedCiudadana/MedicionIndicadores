import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    // var uniqueObjects = [];
    // this.modelFor('application')
    //   .filter(function(item){
    //     if(!uniqueObjects.isAny('property', item.property)){
    //     uniqueObjects.push(item);
    //   }
    // });
    // return uniqueObjects;
    var application = this.modelFor('application')
      .hitos.uniqBy('tematica');
    return application;
  }
});
