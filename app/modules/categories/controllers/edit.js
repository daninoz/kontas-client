export default ngModule => {
  ngModule.controller('CategoriesEditController', CategoriesEditController);

  CategoriesEditController.$inject = ['id', '$mdDialog', 'CategoriesService', 'FormHelper']
  function CategoriesEditController(id, $mdDialog, CategoriesService, FormHelper) {
    var vm = this;

    vm.edit = edit;
    vm.cancel = cancel;

    init();

    function init() {
      FormHelper.setRemoteErrorsResetter(vm, ['duplicate']);
      CategoriesService.get(id).then((response) => {
        vm.category = response;
      })
    }

    function edit() {
      CategoriesService.edit(id, vm.category).then(() => {
        $mdDialog.hide();
      }, () => {
        vm.categoryForm.name.$setValidity('duplicate', false);
      });
    }

    function cancel() {
      $mdDialog.hide();
    }
  }
}