import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //List of orgs
  this.route('orgs', {}); // /orgs

  //Individual org
  this.route('org', {path: 'org/:id'},function() {

    //List of repos
    this.route('repos', {});

    //Individual repos
    this.route('repo', {path: ':repoid'}, function() {
      this.route('contributors');
      this.route('issues');
    }); // org/jquery/jquery-ui
  });
  this.route( 'notfound', {path: '*path'});
});

export default Router;
