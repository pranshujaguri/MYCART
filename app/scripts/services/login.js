'use strict';

/**
 * @ngdoc service
 * @name yoappApp.login
 * @description
 * # login
 * Factory in the yoappApp.
 */
angular.module('yoappApp')
  .factory('login', function ($http, $q) {
    var obj={
		callserver: function(logindetails){
		var defer=$q.defer();
		/*function success(data)
		{
			console.log(userdetails.username);
			var contact=JSON.parse(data);
			
			console.log(contact.username);
		if(userdetails.username===contact.username && userdetails.password===contact.password)
			{
				defer.resolve("SuccessFully Login...");
			}
			else
			{
				defer.resolve("Username and password is incorrect....");		
			}
		}
		function error(data)
		{
			defer.reject(data);
			console.log(data);
		}*/
		$http.post("http://localhost:1234/login", logindetails).then(function (data) {
				defer.resolve(data);
				console.log("Failed", data.data.msg);
			}, function (error) {
				defer.reject(error);
			});
			return defer.promise;
		}
	};
	
	return obj;
  });





/*app.get('/answers', function (req, res) {
	db.open(function (err, db) { // <------everything wrapped inside this function
		db.collection('answer', function (err, collection) {
			collection.find().toArray(function (err, items) {
				console.log(items);
				res.send(items);
			});
		});
	});
});*/