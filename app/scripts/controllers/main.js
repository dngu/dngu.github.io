'use strict';

/**
 * @ngdoc function
 * @name triplogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the triplogApp
 */
angular.module('triplogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
