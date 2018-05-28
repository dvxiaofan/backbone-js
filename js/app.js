function purchase(presnet) {
	console.log(`Buying ${presnet}`);
}

function build(gift) {
	console.log(`Building ${gift}`);
}

var jack = {};

_.extend(jack, Backbone.Events);




jack.events = {
	brithday: [{callback: purchase}],
	party: [{callback: purchase}],
	presents: [
		{callback: purchase},
		{callback: build}
	]
}

