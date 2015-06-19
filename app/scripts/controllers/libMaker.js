'use strict';

/**
 * @ngdoc function
 * @name ngMadLibsApp.controller:libMaker
 * @description
 * # libMaker
 * Controller of the ngMadLibsApp
 */
angular.module('ngMadLibsApp')
  .controller('libMaker', function ($scope) {
	$scope.maleGender = ['he', 'his', 'him'];
	$scope.femaleGender = ['she', 'her', 'her'];
  });
