import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('compromises', function() {
    this.route('index', { path: '/'});
    this.route('compromiso', {path: '/:compromiso_id'});
  });
  this.route('methodology');
});

export default Router;
