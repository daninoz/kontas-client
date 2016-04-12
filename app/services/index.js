import accountsService from './accounts';
import currenciesService from './currencies';
import categoriesService from './categories';

export default angular => {

  var ngModule = angular.module('kontas.services', []);

  accountsService(ngModule);
  currenciesService(ngModule);
  categoriesService(ngModule);

};