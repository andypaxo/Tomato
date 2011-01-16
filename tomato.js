function Timer() {
}

Timer.prototype = {
	timeRemaining: 0,

	startTimer: function(time) {
	},
	
	voidTimer: function() {
		this.timeRemaining = 0;
	}
}

$(function() {
	var timer = new Timer();
	$('.startTimer').click(function() { timer.startTimer($(this).attr('data-time')); });
	$('#voidTimer').click(timer.voidTimer);
});
