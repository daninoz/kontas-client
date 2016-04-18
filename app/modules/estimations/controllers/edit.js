export default ngModule => {
  ngModule.controller('EstimationsEditController', EstimationsEditController);

  EstimationsEditController.$inject = ['id', '$mdDialog', 'EstimationsService', 'CategoriesService', 'CurrenciesService']
  function EstimationsEditController(id, $mdDialog, EstimationsService, CategoriesService, CurrenciesService) {
    var vm = this;

    vm.edit = edit;
    vm.cancel = cancel;

    init();

    function init() {
      CategoriesService.getIndex().then(function (response) {
        vm.categories = response;
      });
      CurrenciesService.getIndex().then(function (response) {
        vm.currencies = response;
      });
      EstimationsService.get(id).then((response) => {
        vm.estimation = response;
      })
    }

    function edit() {
      EstimationsService.edit(id, vm.estimation).then(() => {
        $mdDialog.hide();
      }, () => {
        vm.estimationForm.name.$setValidity('duplicate', false);
      });
    }

    function cancel() {
      $mdDialog.hide();
    }
  }
}