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
    
  // var saveButtons = [saveButton9, saveButton10, saveButton11, saveButton12, saveButton13, saveButton14, saveButton15, saveButton16, saveButton17];

  // var agendaEvents = JSON.parse(localStorage.getItem('agendaEvents')) ?? [];

  // console.log(agendaEvents);

  var saveEvent = function(buttonNumber){
    var hourBlock = buttonNumber.parentElement;
    var newEventInput = hourBlock.children[1].value;
    var newEventHourId = buttonNumber.parentElement.id;
    var newEvent = {
        hour : newEventHourId,
        event : newEventInput
    };
    // TODO: debug agendaEvents.push is not a function
    // agendaEvents.push(newEvent);
    localStorage.setItem('agendaEvents', JSON.stringify(newEvent))
  };

    // TODO: ARRAY AND FOR LOOP - review https://stackoverflow.com/questions/19586137/addeventlistener-using-for-loop-and-passing-values
    // for(i=0; i<saveButtons.length; i++){
    //     var buttonInit = saveButtons[i];
    //     console.log(buttonInit.parentElement);
    //     buttonInit.addEventListener('click', function (event) {
    //         // buttonInit = saveButtons[i];
    //         var hourBlock = buttonInit.parentElement;
    //         console.log(hourBlock);
    //         var newEventInput = hourBlock.children[1].value;
    //         var newEventHourId = buttonInit.parentElement.id;
    //         newEvent = {
    //             hour : newEventHourId,
    //             event : newEventInput
    //         }
    //         localStorage.setItem('agendaEvents', JSON.stringify(newEvent));
    //     });
    // };
    
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

  // TODO: Add code to apply the past, present, or future class to each time
   // Continuously evalute the time every second to set the appropriate class - past, present, or future
  var updatehourClass = function() {
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
  
  // array with each hour id
  function readEventsFromStorage() {
    var events = localStorage.getItem('agendaEvents');
    console.log(events);
    if (events) {
      events = JSON.parse(events);
      console.log(events);
    } else {
      events = [];
      console.log(events);
    }
    return events;
  }

  readEventsFromStorage();

  // TODO: Add code to display the current date in the header of the page.

  var displayTime =function() {
    var today = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(today);
    var currentTime = dayjs().format('h:mm:ss A');
    $('#currentTime').text(currentTime);
  };


  setInterval(displayTime, 1000);
  setInterval(updatehourClass, 1000);
});