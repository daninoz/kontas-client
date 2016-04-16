export default ngModule => {
  ngModule.controller('CurrenciesCreateController', CurrenciesCreateController);

  CurrenciesCreateController.$inject = ['$mdDialog', 'CurrenciesService', 'FormHelper']
  function CurrenciesCreateController($mdDialog, CurrenciesService, FormHelper) {
    var vm = this;

    vm.currency = {};
    vm.create = create;
    vm.cancel = cancel;

    FormHelper.setRemoteErrorsResetter(vm, ['duplicate']);

    function create() {
      CurrenciesService.create(vm.currency).then(() => {
        $mdDialog.hide();
      }, () => {
        vm.currencyForm.name.$setValidity('duplicate', false);
      });
    }

    function cancel() {
      $mdDialog.hide();
    }
  }
}