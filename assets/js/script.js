// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //  
 
  var saveButton9 = document.getElementById("9");
  var saveButton10 = document.getElementById("10");
  var saveButton11 = document.getElementById("11");
  var saveButton12 = document.getElementById("12");
  var saveButton13 = document.getElementById("13");
  var saveButton14 = document.getElementById("14");
  var saveButton15 = document.getElementById("15");
  var saveButton16 = document.getElementById("16");
  var saveButton17 = document.getElementById("17");
  var saveButton18 = document.getElementById("18");
  var saveButton19 = document.getElementById("19");
  var saveButton20 = document.getElementById("20");
  var saveButton21 = document.getElementById("21");
  var saveButton22 = document.getElementById("22");

  var events = JSON.parse(localStorage.getItem('events')) ?? [];

   saveButton9.addEventListener('click', function (e) {
    var hourBlock = this.parentElement
    var newEventInput = hourBlock.children[1].value;
    var newEventHourId = this.parentElement.id;
    
    newEvent = {
      hour : newEventHourId,
      event : newEventInput
    }
    
    localStorage.setItem('events', JSON.stringify(newEvent))
  });

  saveButton10.addEventListener('click', function (e) {
    console.log(this.id)           // logs the className of my_element
    console.log(this.parentElement.id) // logs `true`
  });

  saveButton11.addEventListener('click', function (e) {
    console.log(this.id)           // logs the className of my_element
    console.log(this.parentElement.id) // logs `true`
  });

  // newEvent ={

  // }

  // TODO: Add code to apply the past, present, or future class to each time
  
  // convert current hour to number for evaluation
  var currentHour = Number(dayjs().format('HH'));
  var agendaHoursEl = $('.agendaHours');
  
  // Continuously evalute the time every second to set the appropriate class - past, present, or future

  setInterval(function() {
    for (i=0; i<agendaHoursEl.children().length; i++){
        
      hourCheck = agendaHoursEl.children().eq(i).attr('id').match(/\d+/)[0];
      if (hourCheck == currentHour){
        $('.agendaHours').children('div').eq(i).addClass('present').removeClass('past future');
      } else if (hourCheck < currentHour){
          $('.agendaHours').children('div').eq(i).addClass('past').removeClass('present future');
      } else {
          $('.agendaHours').children('div').eq(i).addClass('future').removeClass('past present');
      }
    };
  }, 1000);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // array with each hour id



  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(today);
  var currentTime = dayjs().format('h:mm A');
  $('#currentTime').text(currentTime);


  

  
});







