$(function() {
    $('#ticketresult').hide();
  
    $('#chooseevent').change(function() {
        $('#ticketresult').slideUp();
        $('#ticketresult').slideDown();
    });
  });