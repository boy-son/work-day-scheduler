$(document).ready(function () {
    
  function update() {
      
      let Date = dayjs().format('dddd, MMMM DD');
      $('#currentDay').text(Date);
      }
      setInterval(update, 1000);

    })
      
const time = dayjs().hour()
console.log(time)
   
const hourArr = ["9", "10", "11", "12", "13","14","15","16","17" ]
for (i=0; i < hourArr.length; i++) {

  let hourId = hourArr[i]
  const setEvents = JSON.parse(localStorage.getItem(hourId))
        
  $("#" + hourId).children("textarea").val(setEvents);
        
  let hourNum = +hourId.split("-")[1]
        

  if (time === hourNum) {

    $("#" + hourId).attr('class', 'row time-block present')
}

  else if (time > hourNum) {

    $("#" + hourId).attr('class', 'row time-block past')
}

  else {
    $("#" + hourId).attr('class', 'row time-block future')
}

}
      
      
// Event listener block, code passing into all blocks 
$("button").click(function() {
const hour = $(this).parent().attr('id')          
var event = $("textarea").val()
localStorage.setItem(hour, JSON.stringify(event))         
})
