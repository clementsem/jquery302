$(document).ready(function() {
  $(function() {
    $('#increase').click(function() {
      $('#output').html(function(i, val) {
        return val * 1 + 1;
      });
    });
  });
  $(function() {
    $('#decrease').click(function() {
      $('#output').html(function(i, val) {
        return val * 1 - 1;
      });
    });
  });
})
