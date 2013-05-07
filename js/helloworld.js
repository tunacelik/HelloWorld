var HELLOWORLD = (function(module){
	module.sayHello = function(mainDiv) {
	    mainDiv.prepend(Date() + ' Hello World <br/>');
	};
	return module;
}(HELLOWORLD || {}));