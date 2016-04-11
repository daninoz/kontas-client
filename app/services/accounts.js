export default ngModule => {
  ngModule.service('AccountsService', AccountsService);
}

AccountsService.$inject = ['$http'];
function AccountsService ($http) {

  var endpoints = {
    accounts: 'api/account',
    account: 'api/account/{id}'
  }

  function getIndex () {
    return $http({
      method: 'GET',
      url: endpoints.accounts
    }).then(function (response) {
      return response.data;
    });
  }

  function create (data) {
    return $http({
      method: 'POST',
      data: data,
      url: endpoints.accounts
    }).then(function (response) {
      return response.data;
    });
  }

  function get (id) {
    return $http({
      method: 'GET',
      url: endpoints.account.replace('{id}', id)
    }).then(function (response) {
      return response.data;
    });
  }

  function edit (id, data) {
    return $http({
      method: 'PUT',
      data: data,
      url: endpoints.account.replace('{id}', id)
    });
  }

  function remove () {
    return $http({
      method: 'DELETE',
      url: endpoints.account
    });
  }

  return {
    getIndex: getIndex,
    create: create,
    get: get,
    edit: edit,
    remove: remove
  }

}