var Calculator = (function(){
	var previous = '';
	var memory = '';
	var operant = '';

	return{
		pressButton: pressButton
	}


	function pressButton(params){
		console.log(params.key);
		var buttons = params.key;

		for(var i=0; i< buttons.length; i++){
				buttons[i].addEventListener('click', function(e){
					console.log(e.target.innerText);
					var target = e.target.innerText;
					

						switch(target){
							case '=':
								var result = calculate(memory);
								displeyResult(result);
								memory='';
								break;
							default:
								memory += target
								displeyResult(memory);
						};

					})
		}
	}

	function calculate(string){
		return new Function('return ' + string + ';')();
	}

	function displeyResult(text){
		var input = document.querySelector('#text');
		if(Array.isArray(text)){
			input.value = text.join(' ');	
		}else{
			input.value = text;	
		}	
	}
	
})();