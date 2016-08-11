var iFrame = null;
var iFrameJQ = null;
var loader = null;
var contentHeight = null;
$(window).load(function(){
  setIFrameHeight();
});
function setIFrameSrc(path){
  $(iFrameJQ).attr("src",path);
}
function switchContent(path){
  iFrame = document.getElementById('iFrame');
  iFrameJQ = $("#iFrame");
  setIFrameSrc(path);
  setTimeout(function(){
    setIFrameHeight();
  },5500);
}
function startLoader(){
  loader = $("#content_container .loader_wrapper");
  $(loader).addClass("animate");
}
function stopLoader(){
  loader = $("#content_container .loader_wrapper");
  $(loader).removeClass("animate");
}
function setIFrameHeight(){
  iFrame = document.getElementById('iFrame');
  iFrameJQ = $("#iFrame");
  if(iFrame){
  	$(iFrameJQ).attr("style","height:"+(iFrame.contentWindow.document.body.scrollHeight + 10)+ "px");
    console.log($(iFrameJQ.css("height")));
    }
}
