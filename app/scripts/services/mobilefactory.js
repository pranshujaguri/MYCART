'use strict';

/**
 * @ngdoc service
 * @name youseApp.mobilefactory
 * @description
 * # mobilefactory
 * Factory in the youseApp.
 */
angular.module('yoappApp')
  .factory('mobilefactory', function ($http, $q) {
    var obj={
		callserver: function(){
			var defer =$q.defer();
			function success(data)
			{
				defer.resolve(data);
			}
			function error(data)
			{
				defer.reject(data);
			}
			$http.get('server/mobile.json').then(success, error);
			return defer.promise;
		}
		
	};
	return obj;
  });
