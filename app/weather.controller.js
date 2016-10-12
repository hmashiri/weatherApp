(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = [ '$http', 'WeatherFactory', 'toastr' ];

    /* @ngInject */
    function WeatherController($http, WeatherFactory, toastr) {
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
                vm.icon = result.weather[0].icon;
        		vm.lowtemp = result.main.temp_min;
        		vm.hightemp = result.main.temp_max;
        		vm.pressure = result.main.pressure;
                vm.lat = result.coord.lat;
                vm.long = result.coord.lon;
        		vm.dates = result.main.pressure;
        		addSearch();
        	});
        }; 

      
        function addSearch(){
        		vm.searchHistories.push({
        			"event":vm.name,
        			"date": Date.now()
        		});
            toastr.success("Your search has been successful!!");
        };


    }
})();



