/**
 * 
 */

'use	strict';
/*	App	Module	*/
var app = angular.module('colors', [
  'ngRoute',
  'colorsControllers'
]);

app.config(['$routeProvider', '$locationProvider', '$httpProvider',
  function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.when('/', { 
        	templateUrl: 'partials/llista.html',
        	controller: 'LlistaCtrl'
        }).when('/llista/:nom', {
            templateUrl: 'partials/color.html',
            controller: 'ColorCtrl'            
        }).when('/login', {
        	templateUrl : 'login.html',
        	controller : 'LoginCtrl'
        }).otherwise('/');
        //        $locationProvider.html5Mode(true);
        /* $locationProvider.html5Mode(false).hashPrefix('!'); */
        
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
     // use the HTML5 History API
        $locationProvider.html5Mode(true);
}]);