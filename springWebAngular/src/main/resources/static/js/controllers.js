/**
 * 
 */
'use	strict';
/*	Controllers	*/
var	colorsControllers	=	
	angular.module('colorsControllers',	[]);

colorsControllers.controller('LlistaCtrl', 
		['$scope','$location','$http',
        function llistaCtrl($scope, $location, $http) {
						
			$http.get('/colors').
			  success(function(data) {
				  $scope.llista = data;
			  }).
			  error(function(data, status, headers, config) {
			      $scope.llista = "error";
			  });
							      
        }]);


colorsControllers.controller('LoginCtrl', 
		['$scope','$location','$http',
        function llistaCtrl($scope, $location, $http) {
						
			
							      
        }]);

colorsControllers.controller('ColorCtrl', 
		['$scope', '$location','$routeParams', '$http', 
        function colorCtrl($scope, $location, $routeParams, $http)	{
			var nom =  $routeParams.nom;
			
			$http.get('/color/' + nom).
			   success(function(data) {
			      $scope.color = data;
			   }).
			   error(function(data, status, headers, config) {
                  $scope.error = true;
			   });
			
        }]);