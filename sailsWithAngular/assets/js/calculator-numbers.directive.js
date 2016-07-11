(function(){
	'use strict';

	angular
		.module('calculatorApp')
		.directive('calcOption', calcNumberDirective);

	calcNumberDirective.$inject = [];

	function calcNumberDirective(){
		return{
			restrict: 'A',
			replace: true, 
			scope:{
				options: '=',
				callback: '&' //callback doesn't work for some reason !?
			},
			template:'<td ng-repeat="option in options track by $index" ng-click="callback({value: option})">'+
										//don't undersatnd why ng-click="cl.pressKey(option)" here works but 
										//ng-click="callback(option)" not. 
						'{{option}}'+
					'</td>'
		}
	}
})();