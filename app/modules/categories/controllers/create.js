export default ngModule => {
  ngModule.controller('CategoriesCreateController', CategoriesCreateController);

  CategoriesCreateController.$inject = ['$mdDialog', 'CategoriesService', 'FormHelper']
  function CategoriesCreateController($mdDialog, CategoriesService, FormHelper) {
    var vm = this;

    vm.category = {};
    vm.create = create;
    vm.cancel = cancel;

    FormHelper.setRemoteErrorsResetter(vm, ['duplicate']);

    function create() {
      CategoriesService.create(vm.category).then(() => {
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