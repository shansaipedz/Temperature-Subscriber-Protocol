/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// the Radio buttons (options)
var rad = document.tempForm.rdoRange;
// stores the current subscription. initilised to coldTemps
var currentSubscription = "pittsburgh/temperature/coldTemps";

// adds an event listener for every radio button
for (var i = 0; i < rad.length; i++) {
  rad[i].addEventListener(
          'change', // event to listen to. i.e. when a user changes selection
          function () { // function definition. Will execute in response to the event
            var selected = this.value;
            if (selected =="#") selected = "All";
            // clear the displayed temp 1st
            displayTemp("Subcribed to: " + selected);
            // change subscription
            subscribe("pittsburgh/temperature/" + this.value);
          }
  );
}

// display the temperature and time stamp received from the mqtt broker
function displayTemp(temp) {
  // display the temperature reading "temp"
  var e = document.getElementById("temp");
  // display the newly-received first
  // the list will be newest to oldest then
  e.innerHTML = temp + "<br>"+ e.innerHTML;
}