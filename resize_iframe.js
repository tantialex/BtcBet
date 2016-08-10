function setIFrameHeight(){
    var iFrame = document.getElementById('iFrame');
	var iFrame2 = $("#iFrame");
	console.log(iFrame.contentWindow.document.body.scrollHeight);
    if(iFrame){
		$("#content_container").attr("style","height:"+(iFrame.contentWindow.document.body.scrollHeight+200)+ "px");
		$(iFrame2).attr("style","height:"+(iFrame.contentWindow.document.body.scrollHeight+200)+ "px");
    }
 }