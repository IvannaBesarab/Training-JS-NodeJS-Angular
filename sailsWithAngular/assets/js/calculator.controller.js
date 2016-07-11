(function(){
	'use strict';

	angular
		.module('calculatorApp')
		// Values
		.value('numbers', [ [1, 2, 3],[4, 5, 6], [7, 8, 9], [0]] )
		.value('operants', [['+', '-'], ['/', '*']] )
		// Directive Controller
		.controller('CalculatorController', CalculatorController)

	CalculatorController.$inject = ['numbers', 'operants'];

	function CalculatorController(numbers, operants){
		var cl = this;
		var current = '';
		var memory = 0;
		var operant = ''
		cl.typedExpression = '';
		cl.result = 0;
		cl.pressKey = pressKey;
		cl.pressOperant = pressOperant;
		cl.calculate = calculate;
		cl.numbers = numbers;
		cl.operants = operants;


		function pressKey(key){
			alert(key);
			console.log(key)
			cl.typedExpression += key;
			current += key;
		}

		function pressOperant(key){
			alert(key);
			console.log(key)
			cl.typedExpression += key;
			operant = key;
			memory = Number.parseFloat(current);
			current = '';
		}

		function calculate(){
			if(current){
				current = Number.parseFloat(current);

				if(operant === '+'){
					cl.result = memory + current;
				}
				if(operant === '-'){
					cl.result = memory - current;
				}
				if(operant === '*'){
					cl.result = memory * current;
				}
				if(operant === '/'){
					cl.result = memory / current;
				}
			}

			cleanVariables();
		}

		function cleanVariables(){
			current = '';
			cl.typedExpression = '';
		}
	}

})();
