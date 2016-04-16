export default ngModule => {
  ngModule.controller('CreditCardsEditController', CreditCardsEditController);

  CreditCardsEditController.$inject = ['id', '$mdDialog', 'CreditCardsService', 'FormHelper']
  function CreditCardsEditController(id, $mdDialog, CreditCardsService, FormHelper) {
    var vm = this;

    vm.edit = edit;
    vm.cancel = cancel;

    init();

    function init() {
      FormHelper.setRemoteErrorsResetter(vm, ['duplicate']);
      CreditCardsService.get(id).then((response) => {
        vm.creditCard = response;
      })
    }

    function edit() {
      CreditCardsService.edit(id, vm.creditCard).then(() => {
        $mdDialog.hide();
      }, () => {
        vm.creditCardForm.name.$setValidity('duplicate', false);
      });
    }

    function cancel() {
      $mdDialog.hide();
    }
  }
}