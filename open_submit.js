var isOpened = false;
var currentChoice = null;
var submit_container = null;
var autoHeight = null;

function changeSubmit(choice){
	submit_container = $("#view_page .submit_container");
	checkAutoHeight();
	if(isOpened && (currentChoice == choice)){
		closeSubmit(false, null);
	}
	else if(isOpened && (currentChoice != choice)){
		closeSubmit(true, choice);
	}
	else if(!isOpened){
		openSubmit(choice);
	}
}
function checkAutoHeight(){
	$(submit_container).css('height', 'auto');
	autoHeight = $(submit_container).height();
	$(submit_container).css('height', '0');
}
function closeSubmit(reopen, choice){
	$(submit_container).css('height', autoHeight);
	$(submit_container).animate({
		height:0,
		opacity:0,
	},700,function(){
		setCurrentChoice(null);
		isOpened = false;
		if(reopen){
			openSubmit(choice);
		}
	});
}

function openSubmit(foo){
	setCurrentChoice(foo);
	$(submit_container).animate({
		height:autoHeight,
		opacity:1,
	},700);
	isOpened = true;
}

function setCurrentChoice(foo){
	currentChoice = foo;
	$(submit_container).attr("data-choice",foo);
	$("#view_page .submit_container .title .choice_text").html(""+foo);
  if(currentChoice != null)
	 document.getElementById("stanceInput").value = currentChoice.toUpperCase();
}
