import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('orgs', {}); // /orgs
  this.route('org', {path: 'org/:id'},function() {
    this.route('repos', {});
    this.route('repo', {}, function() {
      this.route('contributors');
      this.route('issues');
    }); // org/jquery/jquery-ui
  });
});

export default Router;
