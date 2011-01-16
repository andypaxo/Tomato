function Timer() {
}

Timer.prototype = {
	startTimer: function(time) {
	},
	
	voidTimer: function() {
	}
}

$(function() {
	var timer = new Timer();
	$('.startTimer').click(function() { timer.startTimer($(this).attr('data-time')); });
	$('#voidTimer').click(timer.voidTimer);
});
