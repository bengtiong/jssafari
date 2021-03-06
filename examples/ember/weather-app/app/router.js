import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('forecast', {path:'/'});
  this.route('forecast');
  this.route('warning');
  this.route('about');
});

export default Router;
