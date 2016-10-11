(function() {
    'use strict';

    angular
        .module('app')
        .factory('WeatherFactory', WeatherFactory);

    WeatherFactory.$inject = ['$http'];

    /* @ngInject */
    function WeatherFactory($http) {
        var service = {
            getWeather: getWeather
        };
        return service;

        ////////////////

        function getWeather(cityName) {



        	return $http({
        		method: 'GET',
        		url: 'http://api.openweathermap.org/data/2.5/weather',
        		params: {
        			APPID: '756a2c8a5cb2292acc5fe362f3ac9907',
        			q: cityName,
                    units: "imperial"
        		},
        	}).then(function(response) {

        		return response.data;
        		
        	});
        }
    }
})();