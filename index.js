$(document).ready(function(){
function showWindow(){
  $('#main').show();
  $('html body').css('overflow', 'hidden');
}
showWindow();
function hideWindow(){
$('#main').hide();
}
$("#close-btn").click(function(){
    hideWindow();
  });

});
