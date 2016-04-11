import listController from './controllers/list';
import createController from './controllers/create';
import editController from './controllers/edit';

export default angular => {

  var ngModule = angular.module('kontas.accounts', []);

  ngModule.config($routeProvider => {
      $routeProvider
          .when('/accounts', {
            controller: 'AccountsListController',
            controllerAs: 'vm',
            template: require('./views/list.html'),
          });
    });

  listController(ngModule);
  createController(ngModule);
  editController(ngModule);

};