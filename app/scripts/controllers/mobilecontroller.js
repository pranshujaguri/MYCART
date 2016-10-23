'use strict';

/**
 * @ngdoc function
 * @name youseApp.controller:MobilecontrollerCtrl
 * @description
 * # MobilecontrollerCtrl
 * Controller of the youseApp
 */
angular.module('yoappApp')
 .controller('MobilecontrollerCtrl', function ($scope, mobilefactory) {
	var promise = mobilefactory.callserver();

        promise.then(function (data) {
            $scope.result = data;
            console.log($scope.result);
        }, function (error) {
            $scope.result = error;
        });

        var total = 0;
        $scope.totalPrice = function (price) {

            total += price;
            console.log("Total ", total);
            $rootScope.totalPrice = total;
        }

});
