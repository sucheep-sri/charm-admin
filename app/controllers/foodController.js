myApp.controller('FoodController', function($scope, $uibModal){

  $scope.animationsEnabled = true;

  $scope.openModal = function () {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'foodModal.html',
      controller: 'FoodModalController',
      size: 'lg',
      backdrop : 'static'
    });

    modalInstance.result.then(function (account) {
      $scope.accounts.push(account);
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

myApp.controller('FoodModalController', function ($scope, $uibModalInstance, $timeout) {

  $scope.onLoad = false;
  $scope._email = '';
  $scope._name = '';

  $scope.emailValidation = '';
  $scope.nameValidation = '';
  $scope.errorMsg = '';
  $scope.accNameErrMsg = false;
  $scope.accEmailErrMsg = false;

  $scope.$watch('errorMsg', function(newValue, oldValue){
    if(newValue !== ''){
      $timeout(function () {
        $scope.errorMsg = '';
      }, 4000);
    }
  });

  $scope.ok = function () {
    if($scope._name === ''){

        $scope.nameValidation = 'has-error has-feedback';
        $scope.accNameErrMsg = true;

    }else if(!isValidEmail($scope._email)){

        $scope.emailValidation = 'has-error has-feedback';
        $scope.accEmailErrMsg = true;

    }else{

        $scope.onLoad =true;
        var obj = {
            name : $scope._name,
            email : $scope._email
        };
    }

  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

});
