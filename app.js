$(document).ready(function(){

   var display = '';
  
  function retrieveThing() {
    display = list[Math.floor(Math.random() * list.length)];
    return display;
  };

	//Click event to change display text
	$("button").on('click', function(){
        retrieveThing(display);
        $("h2").text(display);
    });
});