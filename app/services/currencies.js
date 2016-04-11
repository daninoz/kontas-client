export default ngModule => {
  ngModule.service('CurrenciesService', CurrenciesService);
}

CurrenciesService.$inject = ['$http'];
function CurrenciesService ($http) {

  var endpoints = {
    currencies: 'api/currency',
    currency: 'api/currency/{id}'
  }

  function getIndex () {
    return $http({
      method: 'GET',
      url: endpoints.currencies
    }).then(function (response) {
      return response.data;
    });
  }

  function create (data) {
    return $http({
      method: 'POST',
      data: data,
      url: endpoints.currencies
    }).then(function (response) {
      return response.data;
    });
  }

  function get (id) {
    return $http({
      method: 'GET',
      url: endpoints.currency.replace('{id}', id)
    }).then(function (response) {
      return response.data;
    });
  }

  function edit (id, data) {
    return $http({
      method: 'PUT',
      data: data,
      url: endpoints.currency.replace('{id}', id)
    });
  }

  function remove () {
    return $http({
      method: 'DELETE',
      url: endpoints.currency
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