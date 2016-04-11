export default ngModule => {
  ngModule.controller('AccountsListController', AccountsListController);

  AccountsListController.$inject = ['$mdDialog', '$mdMedia', 'AccountsService']
  function AccountsListController($mdDialog, $mdMedia, AccountsService) {

    var vm = this;

    vm.create = create;
    vm.edit = edit;
    vm.remove = remove;

    getList();

    function getList() {
      AccountsService.getIndex().then(function (response) {
        vm.accounts = response;
      });
    }

    function create(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;
      $mdDialog.show({
        controller: 'AccountsCreateController',
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
        controller: 'AccountsEditController',
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
      AccountsService.remove(id).then(() => {
        getList();
      });
    }
  }
}