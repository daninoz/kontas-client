export default ngModule => {
  ngModule.service('CreditCardsService', CreditCardsService);
}

CreditCardsService.$inject = ['$http'];
function CreditCardsService ($http) {

  var endpoints = {
    creditCards: 'api/credit-card',
    creditCard: 'api/credit-card/{id}'
  }

  function getIndex () {
    return $http({
      method: 'GET',
      url: endpoints.creditCards
    }).then(function (response) {
      return response.data;
    });
  }

  function create (data) {
    return $http({
      method: 'POST',
      data: data,
      url: endpoints.creditCards
    }).then(function (response) {
      return response.data;
    });
  }

  function get (id) {
    return $http({
      method: 'GET',
      url: endpoints.creditCard.replace('{id}', id)
    }).then(function (response) {
      return response.data;
    });
  }

  function edit (id, data) {
    return $http({
      method: 'PUT',
      data: data,
      url: endpoints.creditCard.replace('{id}', id)
    });
  }

  function remove () {
    return $http({
      method: 'DELETE',
      url: endpoints.creditCard
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