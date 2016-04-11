import formHelper from './form';

export default angular => {

  var ngModule = angular.module('kontas.helpers', []);

  formHelper(ngModule);

};