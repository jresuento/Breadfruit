var EBReporter = {
	jasmineStarted: function(suiteInfo) {
		console.group('Running suite with ' + suiteInfo.totalSpecsDefined);
	},
	suiteStarted: function(result) {
		console.group('Suite started: ' + result.description);
	},
	specStarted: function(result) {
		console.group('Spec started: ' + result.description);
	},
	specDone: function(result) {
		console.log(result.description + ' has ' + result.status);
		for(var i = 0; i < result.failedExpectations.length; i++) {
			console.error('Failure: ' + result.failedExpectations[i].message);
			//console.log(result.failedExpectations[i].stack);
		}
		//console.log('passedExpectations', result.passedExpectations.length);
		console.groupEnd();
	},
	suiteDone: function(result) {
		console.log('Suite: ' + result.description + ' has ' + result.status);
		for(var i = 0; i < result.failedExpectations.length; i++) {
			console.error('AfterAll ' + result.failedExpectations[i].message);
			//console.log(result.failedExpectations[i].stack);
		}
		console.groupEnd();
	},
	jasmineDone: function() {
		console.groupEnd('Finished suite');
	}
};