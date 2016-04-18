import angular from 'angular';
import moment from 'moment';
import ngRoute from 'angular-route';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import accountsModule from './modules/accounts';
import categoriesModule from './modules/categories';
import currenciesModule from './modules/currencies';
import creditCardsModule from './modules/credit-cards';
import estimationsModule from './modules/estimations';
import services from './services';
import helpers from './helpers';

require('../node_modules/angular-material/angular-material.scss');
require('../node_modules/font-awesome/scss/font-awesome.scss');
require('./style.scss');

const app = angular.module('kontas', [
  'ngRoute',
  'ngMaterial',
  'ngMessages',
  'kontas.accounts',
  'kontas.currencies',
  'kontas.categories',
  'kontas.creditCards',
  'kontas.estimations',
  'kontas.services',
  'kontas.helpers'
]);

app.config(config);

config.$inject = ['$routeProvider', '$locationProvider', '$mdDateLocaleProvider'];
function config($routeProvider, $locationProvider, $mdDateLocaleProvider) {
  $routeProvider.otherwise('/accounts');

  $mdDateLocaleProvider.formatDate = function(date) {
    return date ? moment(date).format('DD/MM/YYYY') : '';
  };

  $mdDateLocaleProvider.parseDate = function(dateString) {
    var m = moment(dateString, 'DD/MM/YYYY', true);
    return m.isValid() ? m.toDate() : new Date(NaN);
  };
};

accountsModule(angular);
currenciesModule(angular);
categoriesModule(angular);
creditCardsModule(angular);
estimationsModule(angular);
services(angular);
helpers(angular);