export default ngModule => {
  ngModule.controller('AccountsCreateController', AccountsCreateController);

  AccountsCreateController.$inject = ['$mdDialog', 'AccountsService', 'FormHelper']
  function AccountsCreateController($mdDialog, AccountsService, FormHelper) {
    var vm = this;

    vm.account = {};
    vm.create = create;
    vm.cancel = cancel;

    FormHelper.setRemoteErrorsResetter(vm, ['duplicate']);

    function create() {
      AccountsService.create(vm.account).then(() => {
        $mdDialog.hide();
      }, () => {
        vm.accountForm.name.$setValidity('duplicate', false);
      });
    }

    function cancel() {
      $mdDialog.hide();
    }
  }
}