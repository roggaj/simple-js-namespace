//my simple javascript namespace i use as a template.
//Do a search-resplace on "SIMPLE" and replace it with your sugested namespace name.
//Roger Krona, roger.krona@gmail.com

(function (window, document, SIMPLE, $, undefined) {

		//variables, put variables here
		var myVar = 'SIMPLE namespace logged from init function';

		//private functions, put functions here
		var privateFunction = function(){
			//this function is private inside the SIMPLE namespace
		}


		var publicFunction = function(){
			//this function is public outside the SIMPLE namespace. call it by SIMPLE.publicFunction();
		}

		// initialize
		// call this function by SIMPLE.init();
		var init = function () {
			console.log(myVar);
		};

		// public interface, declare all varibales and functions here you want to expose outside this namespace. 
		var oPublic =
		{
			publicFunction: publicFunction,
			init: init
		};
		return oPublic;
	}();

}(this, this.document, window.SIMPLE = window.SIMPLE || {}, jQuery));