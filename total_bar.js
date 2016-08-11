var bars = null;

$(window).load(function setBars(){
	bars = $(".total_bar");
	console.log("in");
	console.log(bars);
	$(bars).each(function(){
		console.log("loop");
		var yes_bar = $(this).find(".yes_bar");
		var no_bar = $(this).find(".no_bar");
		var yes_percent = $(yes_bar).attr("data-percent");
		var no_percent = $(no_bar).attr("data-percent");
		console.log(yes_percent+"  "+no_percent);

		$(yes_bar).attr("style","width:"+yes_percent+"%;");
		$(no_bar).attr("style","width:"+no_percent+"%;");

		var yes_text = $(yes_bar).find("span");
		var no_text = $(no_bar).find("span");

		$(yes_text).html(yes_percent+"%");
		$(no_text).html(no_percent+"%");
	});
});
