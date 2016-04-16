import angular from 'angular';
import ngRoute from 'angular-route';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import accountsModule from './modules/accounts';
import categoriesModule from './modules/categories';
import currenciesModule from './modules/currencies';
import creditCardsModule from './modules/credit-cards';
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
  'kontas.services',
  'kontas.helpers'
]);

app.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
  $routeProvider.otherwise('/accounts');
};

accountsModule(angular);
currenciesModule(angular);
categoriesModule(angular);
creditCardsModule(angular);
services(angular);
helpers(angular);