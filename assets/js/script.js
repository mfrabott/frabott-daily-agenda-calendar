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
  // TODO: Add code to apply the past, present, or future class to each time
  
  // convert current hour to number for evaluation
  var currentHour = Number(dayjs().format('HH'));
  var agendaHoursEl = $('.agendaHours');
  
  hourCheck= agendaHoursEl.children().attr('id').match(/\d+/)[0];
  console.log(hourCheck[0]);

  
  var hour = document.querySelector('.agendaHours');
  console.log(hour);
  var agendaHourId = parseFloat(hour.textContent);
  
  for (i=9; i<6; i++){
    $("'hour-'i").addClass('future').removeClass('past present');
    console.log($("'hour-'i"));
  }

  // if (agendaHourId === currentHour){
  //   $('.agendaHours').children('div').eq(0).addClass('present').removeClass('past future');
  // } else if (agendaHourId > currentHour){
  //   $('.agendaHours').children('div').eq(0).addClass('future').removeClass('past present');
  // } else {
  //   $('.agendaHours').children('div').eq(0).addClass('past').removeClass('past future');
  // }


  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(today);
  var currentTime = dayjs().format('h:mm A');
  $('#currentTime').text(currentTime);


  

  
});







