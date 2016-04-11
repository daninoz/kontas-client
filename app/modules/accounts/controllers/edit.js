export default ngModule => {
  ngModule.controller('AccountsEditController', AccountsEditController);

  AccountsEditController.$inject = ['id', '$mdDialog', 'AccountsService', 'FormHelper']
  function AccountsEditController(id, $mdDialog, AccountsService, FormHelper) {
    var vm = this;

    vm.edit = edit;
    vm.cancel = cancel;

    init();

    function init() {
      FormHelper.setRemoteErrorsResetter(vm, ['duplicate']);
      AccountsService.get(id).then((response) => {
        vm.account = response;
      })
    }

    function edit() {
      AccountsService.edit(id, vm.account).then(() => {
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