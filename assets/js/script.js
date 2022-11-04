// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


  // save buttons targeted for each hour
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
  var agendaEvents = [];

  
  // Function to check for existing events in local storage and put in array (empty if nothing in localStorage)
  var readEventsFromStorage = function () {
    agendaEvents = JSON.parse(localStorage.getItem('agendaEvents')) ?? [];

  };

  readEventsFromStorage();
 
  // Function to save user input into loval storage
  var saveEvent = function(buttonNumber){
    readEventsFromStorage();
    var hourBlock = buttonNumber.parentElement;
    var newEventInput = hourBlock.children[1].value;
    var newEventHourId = buttonNumber.parentElement.id;
    
    var newEvent = {
        hour: newEventHourId,
        event: newEventInput
    };
    
    // Find and return index position of current entry for the same hour as the newEvent. Returns -1 of no current entries.
    var indexOfObject = agendaEvents.findIndex(agendaEvents => {
      return agendaEvents.hour === newEvent.hour;
    });
    
    // Check to see if there is a saved entry for the same hour - if no, add newEvent object to array; else replace existing entry with new entry
    if (indexOfObject < 0){
      agendaEvents.push(newEvent);
    } else {
      agendaEvents.splice(indexOfObject, 1, newEvent);
    };
    // Save array to local storage
    localStorage.setItem('agendaEvents', JSON.stringify(agendaEvents))
  };


   // Continuously evalute the time every second to set the appropriate class - past, present, or future
  var updateHourClass = function() {
    var currentHour = Number(dayjs().format('HH'));
    var agendaHoursEl = $('.agendaHours');
    for (i=0; i<agendaHoursEl.children().length; i++){
      var hourCheck = agendaHoursEl.children().eq(i).attr('id').match(/\d+/)[0];
      if (hourCheck == currentHour){
        $('.agendaHours').children('div').eq(i).addClass('present').removeClass('past future');
      } else if (hourCheck < currentHour){
        $('.agendaHours').children('div').eq(i).addClass('past').removeClass('present future');
      } else {
        $('.agendaHours').children('div').eq(i).addClass('future').removeClass('past present');
      };
    };
  };

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
  
  for (i=0; i<agendaEvents.length; i++){
    var hourEl = document.getElementById(agendaEvents[i].hour);
    var hourTextArea = hourEl.children[1]
    hourTextArea.textContent = agendaEvents[i].event
  }

  // Displays the current date in the header of the page.
  var displayTime =function() {
    var today = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(today);
    var currentTime = dayjs().format('h:mm:ss A');
    $('#currentTime').text(currentTime);
  };

  setInterval(displayTime, 1000);
  setInterval(updateHourClass, 1000);

  saveButton9.addEventListener('click', function (e) {
    saveEvent(saveButton9);
  });

  saveButton10.addEventListener('click', function (e) {
      saveEvent(saveButton10);
  });

  saveButton11.addEventListener('click', function (e) {
      saveEvent(saveButton11);
  });

  saveButton12.addEventListener('click', function (e) {
      saveEvent(saveButton12);
  });

  saveButton13.addEventListener('click', function (e) {
      saveEvent(saveButton13);
  });

  saveButton14.addEventListener('click', function (e) {
      saveEvent(saveButton14);
  });

  saveButton15.addEventListener('click', function (e) {
      saveEvent(saveButton15);
  });

  saveButton16.addEventListener('click', function (e) {
      saveEvent(saveButton16);
  });

  saveButton17.addEventListener('click', function (e) {
      saveEvent(saveButton17);
  });

  saveButton18.addEventListener('click', function (e) {
      saveEvent(saveButton17);
  });

});