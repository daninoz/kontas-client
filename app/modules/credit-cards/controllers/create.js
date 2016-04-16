export default ngModule => {
  ngModule.controller('CreditCardsCreateController', CreditCardsCreateController);

  CreditCardsCreateController.$inject = ['$mdDialog', 'CreditCardsService', 'FormHelper']
  function CreditCardsCreateController($mdDialog, CreditCardsService, FormHelper) {
    var vm = this;

    vm.creditCard = {};
    vm.create = create;
    vm.cancel = cancel;

    FormHelper.setRemoteErrorsResetter(vm, ['duplicate']);

    function create() {
      CreditCardsService.create(vm.creditCard).then(() => {
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