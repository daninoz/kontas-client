export default ngModule => {
  ngModule.service('FormHelper', FormHelper);
}

FormHelper.$inject = [];
function FormHelper() {
  
  function setRemoteErrorsResetter(controller, errors) {
    controller.resetRemoteErrors = function (input) {
      angular.forEach(input.$error, (error, key) => {
        if (errors.indexOf(key) > -1) {
          input.$setValidity(key, true);
        }
      });
    }
  }

  return {
    setRemoteErrorsResetter: setRemoteErrorsResetter
  }

}