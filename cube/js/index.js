$(function(){
  // alert('m');
  $(document).mousemove(function(event){
    
    $('#cube').css({
      'transform': 'rotateY('+event.pageX+'deg)'+'rotateX('+event.pageY+'deg)'
    });
    
  });
});