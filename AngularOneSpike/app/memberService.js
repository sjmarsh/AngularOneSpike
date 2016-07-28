app.service('memberService', ['$http', function ($http) {

  var baseUrl = 'http://localhost:4963/api/member';

  this.getMember = function (id) {
    return $http.get(baseUrl + '/' + id);
  };

  this.getMemberList = function () {
    return $http.get(baseUrl);
  }

  this.addMember = function (member) {
    return $http.post(baseUrl, member);
  }

}]);