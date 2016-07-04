(function(){
	'use strict';

	angular
		.module('calculatorApp')
		.controller('CalculatorController', CalculatorController)

	CalculatorController.$inject = [];

	function CalculatorController(){
		var cl = this;
		var current = '';
		var memory = 0;
		var operant = ''
		cl.typedExpression = '';
		cl.result = 0;
		cl.pressKey = pressKey;
		cl.pressOperant = pressOperant;
		cl.calculate = calculate;
		cl.numbers = [ [1, 2, 3],[4, 5, 6], [7, 8, 9], [0]];
		cl.operants = [['+', '-'], ['/', '*']];


		function pressKey(key){
			console.log(key)
			cl.typedExpression += key;
			current += key;
		}

		function pressOperant(key){
			console.log(key)
			cl.typedExpression += key;
			operant = key;
			memory = Number.parseFloat(current);
			current = '';
		}

		function calculate(){
			current = Number.parseFloat(current);
			switch (operant){
				case '+':
					cl.result = memory + current;
					current = '';
					cl.typedExpression = '';
				break;
				case '-':
					cl.result = memory - current;
					current = '';
					cl.typedExpression = '';
				break;
				case '/':
					cl.result = memory / current;
					current = '';
					cl.typedExpression = '';
				break;
				case '*':
					cl.result = memory * current;
					current = '';
					cl.typedExpression = '';
				break;
			}

		}
	}

})();
