(function(){
	'use strict';

	angular
		.module('calculatorApp')
		.directive('calculator', CalcuatorDirective);

	CalcuatorDirective.$inject = [];

	function CalcuatorDirective(){
		return {
			restrict: 'E',
			controller: 'CalculatorController',
			controllerAs: 'cl',
			templateUrl: 'templates/calculator.template.html'
		}
	}

})();