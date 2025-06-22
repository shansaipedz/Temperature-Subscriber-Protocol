/* 
 * This JS file contains the variables and functions necessary to connect to 
 * a MQTT server.
 * Source code below base on code from https://www.eclipse.org/paho/clients/js/
 */


/*** GLOBAL VARIABLES ****/

//client = new Paho.MQTT.Client(location.hostname, Number(location.port), "clientId");
var port = 9002; // must match with the websocket port of mqtt server

// client identifier
var clientId = "TemperatureSubscriber_jcanale";

// mqtt url
var mqtturl = "localhost";

// Create a client instance
client = new Paho.MQTT.Client(mqtturl, port, clientId);

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess: onConnect});

/** FUNCTIONS ****/

// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription
  console.log("onConnect");
  // subscribe to messages with subject pittsburgh/temperature/coldTemps
  subscribe("pittsburgh/temperature/coldTemps"); 
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  // call the displayCoordinate in mousetracker.js 
  displayTemp(message.payloadString);
}

// called when a client wants to send a message to MQTT
// method retained here but not used
function publish(message) {
  message = new Paho.MQTT.Message(message);
  message.destinationName = "";
  client.send(message);
}

// subscribe to a topic
// called with there is a change in selection (i.e. selection of radio buttons change
function subscribe(topic) {
  // unsubscribe 1st from current topic
  client.unsubscribe(currentSubscription);
  // then subscribe to the new topic "topic"
  client.subscribe(topic);
  // set new topic as the current topic
  currentSubscription = topic;
}