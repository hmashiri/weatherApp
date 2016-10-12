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
        			APPID: '3a9e7622dcfa46987bcd0995e9271255',
        			q: cityName,
                    units: "imperial"
        		},
                
        	}).then(function(response) {

        		return response.data;
        		
        	});
        }


    }
})();

// JDCT, MT, MT 
