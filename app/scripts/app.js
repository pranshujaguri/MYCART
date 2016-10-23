'use strict';

/**
 * @ngdoc overview
 * @name yoappApp
 * @description
 * # yoappApp
 *
 * Main module of the application.
 */
angular
  .module('yoappApp', ['ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      /*.when('/about', {
        templateUrl: 'views/mobile.html',
        controller: 'MobilecontrollerCtrl',
        controllerAs: 'mobilecontroller'
      })*/
		.when('/mobile', {
        templateUrl: 'views/mobile.html',
        controller: 'MobilecontrollerCtrl',
        controllerAs: 'mobilecontroller'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
