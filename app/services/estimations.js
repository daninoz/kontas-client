import moment from 'moment';

export default ngModule => {
  ngModule.service('EstimationsService', EstimationsService);
}

EstimationsService.$inject = ['$http'];
function EstimationsService ($http) {

  var endpoints = {
    estimations: 'api/estimation',
    estimation: 'api/estimation/{id}'
  }

  function getIndex () {
    return $http({
      method: 'GET',
      url: endpoints.estimations
    }).then(function (response) {
      return response.data;
    });
  }

  function create (data) {
    return $http({
      method: 'POST',
      data: data,
      url: endpoints.estimations
    }).then(function (response) {
      return response.data;
    });
  }

  function get (id) {
    return $http({
      method: 'GET',
      url: endpoints.estimation.replace('{id}', id)
    }).then(function (response) {
      response.data.start_date = new Date(response.data.start_date);
      if (response.data.end_date) {
        response.data.end_date = new Date(response.data.end_date);
      }
      return response.data;
    });
  }

  function edit (id, data) {
    return $http({
      method: 'PUT',
      data: data,
      url: endpoints.estimation.replace('{id}', id)
    });
  }

  function remove () {
    return $http({
      method: 'DELETE',
      url: endpoints.estimation
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