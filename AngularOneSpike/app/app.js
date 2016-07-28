var app = angular.module('memberApp', []);

app.controller('memberController', ['$scope', 'memberService', function ($scope, memberService) {

  $scope.status = 'OK';
  $scope.member = {};
  $scope.genders = ['Male', 'Female']; // todo: grab these from a service

  $scope.addMember = function () {
    memberService.addMember($scope.member)
    .success(function (id) {
      $scope.status = 'Member added with id: ' + id;
      $scope.member = {};
    })
    .error(function (error) {
      $scope.status = 'Error occured adding member. Error Message: ' + error.message;
    })
  };

}]);