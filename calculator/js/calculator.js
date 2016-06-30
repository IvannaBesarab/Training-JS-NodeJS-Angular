var Calculator = (function(){
	var args = [];
	var current = '';
	var text = '';
	var result = document.querySelector('.result');
	var input = document.querySelector('#text');
	// Returning public values 
	return{
		divide: divide,
		multiply: multiply,
		add: add,
		subtract: subtract,
		pressKey: pressKey,
		calculate: calculate,
		minPlus: minPlus,
		float: float,
		clear: clear, 
		clearAll: clearAll
	}


	function pressKey(param){
		var key = param.key;
		if(key.length > 1){			
			for ( var i = 0; i < key.length; i++) {
				key[i].addEventListener('click', function(e){
					text += e.target.innerText;
					displayOperants(text);
					current += e.target.innerText;
				})
			}
		}		
	}

	function addToArguments(operant){
		if(text){
				if(current){
					args.push(current, operant);
				}else{
					var lastElem = args[args.length-1];
					if(lastElem === ' / ' 
						|| lastElem === ' * ' 
						|| lastElem === ' + ' 
						|| lastElem === ' - '){
						args[args.length-1] = operant;
					}else{
						args.push(operant);
					}					
				}
				
			}else{
				return;
			}
			text = args.join(' ');
			displayOperants(args);
			current = '';
	}

	function divide(param){
		var key = param.key;
		key.addEventListener('click', function(e){
			addToArguments(' / ');			
		});

	}

	function multiply(param){
		var key = param.key;
		key.addEventListener('click', function(e){
			addToArguments(' * ');
		});

	}

	function add(param){
		var key = param.key;

		key.addEventListener('click', function(e){
			addToArguments(' + ');			
		})
	}

	function subtract(param){
		var key = param.key;
		key.addEventListener('click', function(e){
			addToArguments(' - ')
		})
	}

	function minPlus(param){
		var key = param.key;
		key.addEventListener('click', function(e){
			
			if(args.length){	
				current = -current;	
				if(current){
					args[args.length] = current;
				}else{
					if(args[args.length-1] == NaN){
						return;
					}
					args[args.length-1] = -(args[args.length-1]);
				}		
								
			}else{
				current = -current;
				if(current){
					args[0] = current;
				}
			}
			text = args.join(' ');
			displayOperants(args);
			current = '';
		})
	}

	function float(param){
		var key = param.key;
		key.addEventListener('click', function(e){
			if(current.indexOf('.') == -1){
				current += '.';
				text += '.';
				displayOperants(text);
			}
			
		});
	}

	function clear(param){
		var key = param.key;
		key.addEventListener('click', function(e){
			if(args.length && !Number(args[args.length-1])){
				args = args.slice(0, args.length-1);
				text = args.join(' ');
			}else{
				text = text.slice(0, text.length-1);			
				current = current.slice(0, current.length-1);
			}
			
			displayOperants(text);
		});
	}

	function clearAll(param){
		var key = param.key;
		key.addEventListener('click', function(e){
			text = '';
			current = '';
			args = [];
			displayOperants(0);
		});
		
	}

	function calculate(param){
		var key = param.key;
		key.addEventListener('click', function(e){
			args.push(current);
			var calculatedResult = calculateString(args.join(' '));
			args = [];
			text = '';
			current = '';
			result.innerText  = calculatedResult;
			input.value = 0;
		})		
	}

	function calculateString(string){
 		 return new Function('return ' + string + ';')();
 	}

	function displayOperants(text){
		var input = document.querySelector('#text');
		if(Array.isArray(text)){
			input.value = text.join(' ');	
		}else{
			input.value = text;	
		}		
	}	
})();

