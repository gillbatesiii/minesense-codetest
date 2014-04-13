/**
 * Controller.js for minesense-codetest app
 * 
 * TODO:
 * - send contents of query.results.weather.rss.channel.item.forecast to scope
 * - make request to Yahoo weather
 * - monitor errors
 * 
 * 
 * 
 */

var weatherApp = angular.module('weatherApp', []);

/**
 * factory: should query Yahoo weather, if request is successful 
 * check for errors in the response, 
 * then if no errors find the city and forecast and return to requesting entity
 */
weatherApp.factory('forecastFactory', ['$http', function($http){
	
}])

weatherApp.controller('ForecastController', function ($scope){
	$scope.getForecasts = function(){
	  $scope.forecasts = [{"code":"29","date":"11 Apr 2014","day":"Fri","high":"64","low":"42","text":"Partly Cloudy"},{"code":"30","date":"12 Apr 2014","day":"Sat","high":"64","low":"41","text":"Partly Cloudy"},{"code":"32","date":"13 Apr 2014","day":"Sun","high":"69","low":"42","text":"Sunny"},{"code":"30","date":"14 Apr 2014","day":"Mon","high":"72","low":"44","text":"Partly Cloudy"},{"code":"11","date":"15 Apr 2014","day":"Tue","high":"59","low":"43","text":"Few Showers"}];
	}
	
})