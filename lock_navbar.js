var navBar = $("#header_container .bottom_row");
var timeout = false;
function startTimeout(){	
	if(!timeout){
		timeout=true;
		var first = true;
		setInterval(function(){
			timeout=false;
			if(!first)
				clearInterval();
			else 
				first=false;
		},5000);
	}
}

$(window).scroll(function(){
	console.log("in");
	if(!timeout){		
		startTimeout();
		if (this.scrollTop > 147) {
			$(navBar).attr("style","position:fixed;");
		}else{
			$(navBar).attr("style","position:relative;");
		}
		
		console.log("loop");
	}  	
});