(function(){
	'use strict';

	angular
		.module('calculatorApp')
		.controller('CalculatorController', CalculatorController)

	CalculatorController.$inject = [];

	function CalculatorController(){
		var cl = this;
		cl.pressKey = pressKey;
		cl.pressOperant = pressOperant;
		cl.numbers = [ [1, 2, 3],[4, 5, 6], [7, 8, 9], [0]];
		cl.operants = ['+', '-', '/', '*'];


		function pressKey(key){
			console.log(key)
		}

		function pressOperant(key){
			console.log(key)
		}
	}

})();