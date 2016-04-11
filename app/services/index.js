import accountsService from './accounts';
import currenciesService from './currencies';

export default angular => {

  var ngModule = angular.module('kontas.services', []);

  accountsService(ngModule);
  currenciesService(ngModule);

};