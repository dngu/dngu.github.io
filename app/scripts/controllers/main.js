'use strict';

/**
 * @ngdoc function
 * @name triplogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the triplogApp
 */
angular.module('triplogApp')
  .controller('MainCtrl', function ($scope, moment, $timeout, dataService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var visitedData = dataService.getVisitData();
    var flightData = dataService.getFlightData();

    var createDisplayData = function(nMonths, dDate) {
        return {
            totalCountries : 0,
            totalDays : 0,
            totalVisits : 0,
            totalFlights : 0,
            totalMiles : 0,
            totalFlightHours : 0,
            numMonths : nMonths,
            displayDate : dDate.format('MMMM YYYY')
        };
    };

    var convertAllDates = function(obj, field) {
    	obj[field] = moment(obj[field], 'DD-MM-YYYY');
    };

	var calculatePaletteLevel = function (score) {
	    return 'level' + Math.floor((score - minValue)/maxValue * 5); 
	};

	var numberWithCommas = function (x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

    visitedData.forEach(function(v) { convertAllDates(v, 'visited'); });
    flightData.forEach(function(f) { convertAllDates(f, 'flightDate'); });

	var lookupMap = {};
	var series = [];
    var dataset = {};

    var onlyValues;
	var minValue;
	var maxValue;

    var refreshMap = function(numMonths) {
        var filterDate = moment('2005-08-31').add(numMonths, 'months');
        var displayData = createDisplayData(numMonths, filterDate);

    	lookupMap = {};
    	for (var i = 0; i < visitedData.length; i++) {
    		var v = visitedData[i];
    		if (v.visited.isAfter(filterDate)) {
    			break;
    		}
	    	var curr = lookupMap[v.code] || {};
	    	lookupMap[v.code] = {
	    		code: v.code,
	    		name: v.name,
	    		totalVisits: 1 + (curr.totalVisits || 0),
	    		totalDays: v.days + (curr.totalDays || 0)
	    	};
	    	displayData.totalVisits = displayData.totalVisits + 1;
	    	displayData.totalDays = displayData.totalDays + v.days;
    	}

    	for (var j = 0; j < flightData.length; j++) {
    		var f = flightData[j];
    		if (f.flightDate.isAfter(filterDate)) {
    			break;
    		}
    		displayData.totalMiles = displayData.totalMiles + f.miles;
    		displayData.totalFlights = displayData.totalFlights + 1;
    	}
    	displayData.totalFlightHours = Math.floor(displayData.totalMiles / 567);
        displayData.totalMiles = numberWithCommas(displayData.totalMiles);

		series = [];
		for (var key in lookupMap) {
		    series.push(lookupMap[key]);
		    displayData.totalCountries = displayData.totalCountries + 1;
		}

		// Datamaps expect data in format:
	    // { 'USA': { 'fillKey': 'level0'}, 'FRA': { 'fillKey': 'level1'} }
	    onlyValues = onlyValues || series.map(function(obj){ return obj.totalVisits; });
	    minValue = minValue || Math.min.apply(null, onlyValues);
	    maxValue = maxValue || Math.max.apply(null, onlyValues) - minValue + 1;

		dataset = {};

		series.forEach(function(item){
	        // item example value ['USA', 70]
	        var iso = item.code, value = item.totalVisits;
	        dataset[iso] = { fillKey: calculatePaletteLevel(value) };
	    });

		$scope.data = displayData;

	    $scope.mapObject = {
		  scope: 'world',
		  options: {
		    width: 900
		  },
		  geographyConfig: {
		    highlighBorderColor: '#EAA9A8',
		    highlighBorderWidth: 2,
		    popupTemplate: function(geo) {
	            return '<div class="hoverinfo"><strong>' + geo.properties.name + '<br/>Total Days Visited: ' + lookupMap[geo.id].totalDays + '<br/>Total Visits: ' + lookupMap[geo.id].totalVisits + '</strong></div>';
	        }
		  },
		  fills: {
		    defaultFill: '#C3C4B6',
	    	level0: '#859DBF',
	    	level1: '#51759F',
	    	level2: '#36608F',
	    	level3: '#1C4C7F',
	    	level4: '#02386F'
		  },
		  data: dataset
		};
    };
    
    var startDate = moment('2005-08-31');
    var currentDate = moment();
    var currentMonths = Math.floor(moment.duration(currentDate.diff(startDate)).asMonths() / 3) * 3 + 3;

    refreshMap(currentMonths);

    $scope.maxMonths = currentMonths;

    $scope.refreshMap = function(numMonths) {
    	refreshMap(numMonths);
    };

    var increaseNumMonths = function() {
    	if ($scope.data.numMonths < $scope.maxMonths) {
    		refreshMap($scope.data.numMonths + 3);
    		$timeout(increaseNumMonths, 500);
    	} else {
    		$scope.inProgress = false;
    	}
    };

    $scope.startPlayback = function() {
    	$scope.inProgress = true;
    	refreshMap(0);
    	$timeout(increaseNumMonths, 500);
    };
  });
