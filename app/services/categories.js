export default ngModule => {
  ngModule.service('CategoriesService', CategoriesService);
}

CategoriesService.$inject = ['$http'];
function CategoriesService ($http) {

  var endpoints = {
    categories: 'api/category',
    category: 'api/category/{id}'
  }

  function getIndex () {
    return $http({
      method: 'GET',
      url: endpoints.categories
    }).then(function (response) {
      return response.data;
    });
  }

  function create (data) {
    return $http({
      method: 'POST',
      data: data,
      url: endpoints.categories
    }).then(function (response) {
      return response.data;
    });
  }

  function get (id) {
    return $http({
      method: 'GET',
      url: endpoints.category.replace('{id}', id)
    }).then(function (response) {
      return response.data;
    });
  }

  function edit (id, data) {
    return $http({
      method: 'PUT',
      data: data,
      url: endpoints.category.replace('{id}', id)
    });
  }

  function remove () {
    return $http({
      method: 'DELETE',
      url: endpoints.category
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