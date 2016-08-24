var list_containers = $(".list_container");
$(list_containers).each(function(){
  if(($(this).find(".card_container")).length == 0){
    $($(this).find(".no_results_wrapper")).attr("style","display:block;");
  }
});
