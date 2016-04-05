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

    var totalCountries = 0;
    var totalDays = 0;
    var totalVisits = 0; 

    var startDate = moment('2005-08-31');
    var currentDate = moment();

    $scope.displayDate = currentDate.format('MMMM YYYY');
    $scope.numMonths = Math.floor(moment.duration(currentDate.diff(startDate)).asMonths());

    visitedData.forEach(function(v) {
    	v.visited = moment(v.visited, 'DD-MM-YYYY');
    });

	var lookupMap = {};
	var series = [];
    var dataset = {};

    var onlyValues;
	var minValue;
	var maxValue;

	var calculatePaletteLevel = function (score) {
	    return 'level' + Math.floor((score - minValue)/maxValue * 5); 
	};

    var refreshMap = function(filterDate) {
    	totalCountries = 0;
    	totalDays = 0;
     	totalVisits = 0; 

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
	    	totalVisits = totalVisits + 1;
	    	totalDays = totalDays + v.days;
    	}

		series = [];
		for (var key in lookupMap) {
		    series.push(lookupMap[key]);
		    totalCountries = totalCountries + 1;
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

		$scope.totalCountries = totalCountries;
	    $scope.totalDays = totalDays;
	    $scope.totalVisits = totalVisits;

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

    refreshMap(currentDate);

    $scope.refreshMap = function(numMonths) {
    	var filterDate = moment('2005-08-31').add(numMonths, 'months');
    	$scope.displayDate = filterDate.format('MMMM YYYY');
    	refreshMap(filterDate);
    };

    var increaseNumMonths = function() {
    	if ($scope.numMonths < 180) {
    		$scope.numMonths = $scope.numMonths + 3;
    		$scope.refreshMap($scope.numMonths);
    		$timeout(increaseNumMonths, 750);
    	}
    };

    $scope.startPlayback = function() {
    	$scope.numMonths = 0;
    	$scope.refreshMap(0);
    	$timeout(increaseNumMonths, 750);
    };
  });
