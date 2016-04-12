export default ngModule => {
  ngModule.controller('CategoriesListController', CategoriesListController);

  CategoriesListController.$inject = ['$mdDialog', '$mdMedia', 'CategoriesService']
  function CategoriesListController($mdDialog, $mdMedia, CategoriesService) {

    var vm = this;

    vm.create = create;
    vm.edit = edit;
    vm.remove = remove;

    getList();

    function getList() {
      CategoriesService.getIndex().then(function (response) {
        vm.categories = response;
      });
    }

    function create(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;
      $mdDialog.show({
        controller: 'CategoriesCreateController',
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
        controller: 'CategoriesEditController',
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
      CategoriesService.remove(id).then(() => {
        getList();
      });
    }
  }
}