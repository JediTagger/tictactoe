//****************************************
// Click event for a div
//****************************************
// $('td').click(function () {
//   var $allDivs = $('td');
//   $allDivs.css('border', 'none');
//   $allDivs.removeClass('selectedDiv');
  
//   var $clickedDiv = $(this);
//   $clickedDiv.css('border', '1px solid black');
//   $clickedDiv.addClass('selectedDiv');
  
//   $('form').removeClass('hidden');
// });

//****************************************
// Click event for the form button
//****************************************
// $('button').click(function(event) {
//   event.preventDefault();
  
//   var color = $('input').val();
  
//   $('.selectedDiv').css('background', color);
   
// });

// $('td').click(function () {
//   $('this').css("background-color", 'blue');

// }

$( "td" ).onClick(function() {
  $( this ).toggleClass( "border blue");
});