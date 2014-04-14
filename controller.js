/**
 * Controller.js for minesense-codetest app
 * 
 * TODO:
 * - send contents of query.results.weather.rss.channel.item.forecast to $scope - done
 * - make request to Yahoo weather - done
 * - monitor errors 
 * 
 * 
 * 
 */

var weatherApp = angular.module('weatherApp', []);



/**
 * forecastFactory: queries Yahoo weather passing cityName parameter 
 * on success, find the city and forecast and return to requesting entity
 */
weatherApp.factory('forecastFactory', function($http){
	var ForecastResult = {
				city: 		'not found!',
				dailyForecasts:	[]
	}
	var factory = {};
	factory.getForecasts = function(cityName) {
		//cityName = cityName || 'Vancouver'; // defaults cityName to Vancouver if it's empty
		cityName = (!cityName) ? '' : cityName.replace(/\s+/g, ''); // removes spaces because yahoo apis doesn't like them
		$http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.bylocation%20WHERE%20location%3D%22' + cityName + '%22&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=')
		.success(function(data, status, headers, config){			
			ForecastResult.dailyForecasts = data.query.results.weather.rss.channel.item.forecast || [];
			ForecastResult.city = data.query.results.weather.rss.channel.location.city || 'city name not returned';
			ForecastResult.region = data.query.results.weather.rss.channel.location.region || ''
			ForecastResult.country = data.query.results.weather.rss.channel.location.country || '';
		})
		.error(function(data, status, headers, config){
			//handle the error
			console.log('data:');
			console.log(data);
			console.log('status:');
			console.log(status);
			console.log('headers:');
			console.log(headers);
		})

		return ForecastResult;
	}
	
	return factory;
})

weatherApp.controller('ForecastController', function ($scope, forecastFactory){
	$scope.getForecasts = function(){
	  
	  $scope.forecast = forecastFactory.getForecasts($scope.query.cityName);
	}
	
})