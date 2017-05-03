(function(){
	window.jasmine = jasmineRequire.core(jasmineRequire);
	var env = jasmine.getEnv();
	var jasmineInterface = jasmineRequire.interface(jasmine, env);
	
	if (typeof window == "undefined" && typeof exports == "object") {
		extend(exports, jasmineInterface);
	} else {
		extend(window, jasmineInterface);
	}

	env.addReporter(EBReporter);

	window.setTimeout = window.setTimeout;
	window.setInterval = window.setInterval;
	window.clearTimeout = window.clearTimeout;
	window.clearInterval = window.clearInterval;

	var currentWindowOnload = window.onload;

	window.onload = function() {
		if (currentWindowOnload) {
			currentWindowOnload();
		}
		env.execute(env.topSuite().id);
	};

	function extend(destination, source) {
		for (var property in source) destination[property] = source[property];
		return destination;
	}
})();