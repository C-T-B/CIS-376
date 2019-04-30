$(document).ready(function(){

    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();

      $(this).append('<div class="status like">Apply</div>');      
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(10);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(10);
       }
    });  

   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Pass</div>');

    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      alert('We are out of current job listings, Thank you');
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
  });
	$('#resume').click(function() {
  window.location='https://c-t-b.github.io/CIS-376/CIS%20FINAL/pages/resume.html'
});
	$('#repo').click(function() {
  window.location='https://github.com/C-T-B/CIS-376'
});
	$('#home').click(function() {
  window.location='https://c-t-b.github.io/CIS-376/CIS%20FINAL/index.html'
});
});