app.service('memberService', ['$http', function ($http) {

  var baseUrl = '/api/member';

  this.getMember = function (id) {
    return $http.get(baseUrl + '/' + id);
  };

  this.getMemberList = function () {
    return $http.get(baseUrl);
  }

  this.addMember = function (member) {
    return $http.post(baseUrl, member);
  }

  this.deleteMember = function (id) {
    return $http.delete(baseUrl + '/' + id);
  }

}]);