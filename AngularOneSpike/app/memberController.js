app.controller('memberController', ['$scope', 'memberService', function ($scope, memberService) {

  $scope.pageClass = 'page-home';

  $scope.status = 'OK';
  $scope.member = {};
  $scope.members = {};
  $scope.genders = ['Male', 'Female']; // todo: grab these from a service

  getMembers();

  $scope.addMember = function () {
    memberService.addMember($scope.member)
    .success(function (id) {
      $scope.status = 'Member added with id: ' + id;
      $scope.member = {};
      getMembers();
    })
    .error(function (error) {
      $scope.status = 'Error occured adding member. Error Message: ' + error.message;
    })
  };

  $scope.deleteMember = function (member) {
    memberService.deleteMember(member.Id)
    .success(function () {
      $scope.status = 'Member with id ' + member.Id + ' has been deleted.';
      getMembers();
    })
    .error(function (error) {
      $scope.status = 'Error occured while deleting member. Error Message: ' + error.message;
    })
  }

  function getMembers() {
    memberService.getMemberList()
    .success(function (members) {
      $scope.members = members;
    })
    .error(function (error) {
      $scope.status = 'Error occured getting member list. Error Message: ' + error.message;
    })
  }

}]);