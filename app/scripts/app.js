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
      .when('/appliance', {
        templateUrl: 'views/appliance.html',
        controller: 'ApplianccontrollerCtrl',
        controllerAs: 'appliancectrl'
      })
		.when('/mobile', {
        templateUrl: 'views/mobile.html',
        controller: 'MobilecontrollerCtrl',
        controllerAs: 'mobilecontroller'
      })
	.when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
