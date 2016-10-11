(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = [ '$http', 'WeatherFactory' ];

    /* @ngInject */
    function WeatherController($http, WeatherFactory) {
        var vm = this;
        vm.title = 'WeatherController';
       
        activate();
        ////////////////

        function activate(){

        }

        vm.searchHistories = [];


        vm.getWeatherReport = function(cityName){


        	WeatherFactory.getWeather(cityName).then(function(result){
        		vm.name = result.name;
        		vm.temp = result.main.temp;
        		vm.windspeed = result.wind.speed
        		vm.humidity = result.main.humidity;
        		vm.lowtemp = result.main.temp_min;
        		vm.hightemp = result.main.temp_max;
        		vm.pressure = result.main.pressure;
        		vm.dates = result.main.pressure;
        		addSearch();
        	});
        }; 

      
        function addSearch(){
        		vm.searchHistories.push({
        			"event":vm.name,
        			"date": Date.now()
        		});
        };


    }
})();



