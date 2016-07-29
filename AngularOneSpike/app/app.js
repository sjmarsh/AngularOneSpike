var app = angular.module('memberApp', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'app/views/page-home.html',
    controller: 'memberController'
  })

  .when('/:memberId', {
    templateUrl: 'app/views/page-member-detail.html',
    controller: 'memberDetailController'
  })

  .otherwise({
    redirectTo: '/'
  })
  
});
