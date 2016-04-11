export default ngModule => {
  ngModule.controller('CurrenciesListController', CurrenciesListController);

  CurrenciesListController.$inject = ['$mdDialog', '$mdMedia', 'CurrenciesService']
  function CurrenciesListController($mdDialog, $mdMedia, CurrenciesService) {

    var vm = this;

    vm.create = create;
    vm.edit = edit;
    vm.remove = remove;

    getList();

    function getList() {
      CurrenciesService.getIndex().then(function (response) {
        vm.currencies = response;
      });
    }

    function create(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;
      $mdDialog.show({
        controller: 'CurrenciesCreateController',
        controllerAs: 'vm',
        template: require('../views/create.html'),
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false,
        fullscreen: useFullScreen,
      }).then(function () {
        getList();
      });
    }

    function edit(id, ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
      $mdDialog.show({
        controller: 'CurrenciesEditController',
        controllerAs: 'vm',
        template: require('../views/edit.html'),
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false,
        fullscreen: useFullScreen,
        locals: {
          id: id
        }
      }).then(function () {
        getList();
      });
    }

    function remove(id) {
      CurrenciesService.remove(id).then(() => {
        getList();
      });
    }
  }
}