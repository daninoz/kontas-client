export default ngModule => {
  ngModule.controller('EstimationsCreateController', EstimationsCreateController);

  EstimationsCreateController.$inject = ['$mdDialog', 'EstimationsService', 'CategoriesService', 'CurrenciesService']
  function EstimationsCreateController($mdDialog, EstimationsService, CategoriesService, CurrenciesService) {
    var vm = this;

    vm.estimation = {};
    vm.create = create;
    vm.cancel = cancel;
    
    init();

    function init() {
      CategoriesService.getIndex().then(function (response) {
        vm.categories = response;
      });
      CurrenciesService.getIndex().then(function (response) {
        vm.currencies = response;
      });
    }

    function create() {
      EstimationsService.create(vm.estimation).then(() => {
        $mdDialog.hide();
      });
    }

    function cancel() {
      $mdDialog.hide();
    }
  }
}