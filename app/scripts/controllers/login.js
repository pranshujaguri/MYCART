'use strict';

/**
 * @ngdoc function
 * @name yoappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the yoappApp
 */
angular.module('yoappApp')
  .controller('LoginCtrl', function ($scope, login) {
    /*this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
	
	$scope.submit=function(){
	var logindetails={
		userid: $scope.email,
		pwd: $scope.pwd,
	};
	
	var promise=login.callserver(logindetails);
	promise.then(function (data){
		console.log("Failed ", data.data.msg);
		$scope.result=data.data.msg;
	}, function(error){
		$scope.result=error;
	});
		};
	
	/*function getCategories() 
	{
	return (self.wines || []).map(function (wine) {
		return wine.category;
	}).
	filter(function (cat, idx, arr) {
		return arr.indexOf(cat) === idx;
	});
	
	
	*/
  });
