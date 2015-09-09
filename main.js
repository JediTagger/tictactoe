//Click once to change color to red.
$('td').click(function() {
  $(this).toggleClass('red');
});
//"dblclick" is "double click" and seemed like the easiest way to get to a different color.
$('td').dblclick(function() {
  $(this).toggleClass('blue');
});
//looked up reload and put this in instead of instructions to reload the page.
$('button').click(function() {
  document.location.reload(true);
});