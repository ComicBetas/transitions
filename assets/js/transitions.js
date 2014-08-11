$(document).ready(function(){
  $.fn.norse_transitions = function(a) {
    this.find('.dynamic-caption').each(function(){
      if($(this).attr('data-transition') == "spiral") {
        var startX = $(this).attr('data-start-x'); // where the objects left side starts
				var starty = $(this).attr('data-start-y'); // where the objects top side starts
        console.log(startX);
      } else if($(this).attr('data-transition') == "zoomin") {
        var m = $(this).children('span').height();
        var n = $(this).children('span').width();
        var o = $(this).attr('data-speed');

        $(this).children().css({'-webkit-animation' : 'zoomin ' + o + 'ms'})
        $(this).children().css({'animation' : 'zoomin ' + o + 'ms'});

        $(this).css({"bottom" : "auto"});
        $(this).css({"left" : $(this).attr('data-y') + "px"});
        $(this).css({"right" : "auto"});
        $(this).css({"top" : $(this).attr('data-x') + "px"});
      }
    })
    /*<dl>
        <dt>slidein</dt>
          <dd>A basic slide to the destination <small>(requires start coordinates)</small></dd>
        <dt>spiral</dt>
          <dd>Using a fibonacci spiral go to the destination <small>(requires start coordinates)</small></dd>
        <dt>vibratehard</dt>
          <dd>Using a hard spikey line go to the destination <small>(requires start coordinates)</small></dd>
        <dt>vibratesoft</dt>
          <dd>Using a soft curve line go to the destination <small>(requires start coordinates)</small></dd>
        <dt>fade</dt>
          <dd>starting from 0 opacity finish at 1</dd>
        <dt>focus</dt>
          <dd>go from blurry to clear</dd>
        <dt>clap</dt>
          <dd>like a rubber band snapping back to it's default form
        <dt>zoomin</dt>
          <dd>start from nothing and get larger</dd>
        <dt>zoomout</dt>
          <dd>shrink from the canvas size</dd>
        <dt>form</dt>
          <dd>form from particles (pixels)</dd>
      </dl>
			
      case (a = 'slidein') {
        
      }*/
  }
})