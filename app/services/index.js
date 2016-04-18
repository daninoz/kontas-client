import accountsService from './accounts';
import currenciesService from './currencies';
import categoriesService from './categories';
import creditCardsService from './credit-cards';
import estimationsService from './estimations';

export default angular => {

  var ngModule = angular.module('kontas.services', []);

  accountsService(ngModule);
  currenciesService(ngModule);
  categoriesService(ngModule);
  creditCardsService(ngModule);
  estimationsService(ngModule);

};