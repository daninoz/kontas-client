export default ngModule => {
  ngModule.controller('CreditCardsListController', CreditCardsListController);

  CreditCardsListController.$inject = ['$mdDialog', '$mdMedia', 'CreditCardsService']
  function CreditCardsListController($mdDialog, $mdMedia, CreditCardsService) {

    var vm = this;

    vm.create = create;
    vm.edit = edit;
    vm.remove = remove;

    getList();

    function getList() {
      CreditCardsService.getIndex().then(function (response) {
        vm.creditCards = response;
      });
    }

    function create(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;
      $mdDialog.show({
        controller: 'CreditCardsCreateController',
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
        controller: 'CreditCardsEditController',
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
      CreditCardsService.remove(id).then(() => {
        getList();
      });
    }
  }
}