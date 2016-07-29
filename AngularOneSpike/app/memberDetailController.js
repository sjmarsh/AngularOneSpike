app.controller('memberDetailController', ['$scope', '$routeParams', '$location', 'memberService', function ($scope, $routeParams, $location, memberService) {

  $scope.pageClass = 'page-member-detail';

  $scope.status = 'OK';
  $scope.memberDetail = {};

  $scope.genders = ['Male', 'Female']; // todo: grab these from a service

  getMember();

  $scope.updateMember = function () {
    memberService.updateMember($scope.memberDetail)
    .success(function () {
      $scope.status = 'Successfully updated member';
      // navigate back
      $location.path('/');
    })
    .error(function (error) {
      $scope.status = 'Error updating member. Error Message: ' + error.message;
    })
  };

  function getMember() {
    var memberId = $routeParams.memberId;
    memberService.getMember(memberId)
    .success(function (member) {
      member.DateOfBirth = new Date(member.DateOfBirth); // Date selector needs date object
      $scope.memberDetail = member;
    })
    .error(function (error) {
      $scope.status = 'Error retrieving member details. Error Message: ' + error.message;
    });
  };

}]);