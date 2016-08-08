function setIFrameHeight(){
      var iFrame = document.getElementById('iFrame');
	  var iFrame2 = $("#iFrame");
      if(iFrame) {
			$(iFrame2).attr("style","height:"+iFrame.contentWindow.document.body.scrollHeight + "px");
      }   
 }