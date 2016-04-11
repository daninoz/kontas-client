export default ngModule => {
  ngModule.controller('CurrenciesEditController', CurrenciesEditController);

  CurrenciesEditController.$inject = ['id', '$mdDialog', 'CurrenciesService', 'FormHelper']
  function CurrenciesEditController(id, $mdDialog, CurrenciesService, FormHelper) {
    var vm = this;

    vm.edit = edit;
    vm.cancel = cancel;

    init();

    function init() {
      FormHelper.setRemoteErrorsResetter(vm, ['duplicate']);
      CurrenciesService.get(id).then((response) => {
        vm.currency = response;
      })
    }

    function edit() {
      CurrenciesService.edit(id, vm.currency).then(() => {
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