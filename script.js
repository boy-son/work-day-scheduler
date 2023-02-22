$(document).ready(function () {
    
  function update() {
      
      let Date = dayjs().format('dddd, MMMM DD');
      $('#currentDay').text(Date);
      }
      setInterval(update, 1000);

    })
      
    $('.description').each(function() {
      var time = dayjs().hour();
      var timeBlock = $(this).parent().attr("id");
      
  
      if (time > timeBlock) {
          $(this).addClass('past');
          $(this).removeClass('present');
          $(this).removeClass('future'); 
      } 
      else if (time == timeBlock) {
          $(this).removeClass('past');
          $(this).addClass('present');
          $(this).removeClass('future');
      } 
      else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
      }
  });
  
$('#9 > .description').val(localStorage.getItem('9'))
$('#10 > .description').val(localStorage.getItem('10'))
$('#11 > .description').val(localStorage.getItem('11'))
$('#12 > .description').val(localStorage.getItem('12'))
$('#13 > .description').val(localStorage.getItem('13'))
$('#14 > .description').val(localStorage.getItem('14'))
$('#15 > .description').val(localStorage.getItem('15'))
$('#16 > .description').val(localStorage.getItem('16'))
$('#17 > .description').val(localStorage.getItem('17'))

localStorage.setItem("#description", "description.textContent");

$("button").click(function() {
const hour = $(this).parent().attr('id')          
var event = $("textarea").val()
localStorage.setItem(hour, JSON.stringify(event))         
})
