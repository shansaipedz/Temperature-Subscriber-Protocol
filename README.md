# Web-Based Temperature Sensor MQTT System

## 📖 Description

This project implements a complete IoT temperature monitoring system that uses the **MQTT protocol** to enable real-time communication between a simulated temperature sensor (publisher) and a dynamic web-based interface (subscriber).

It consists of:

### 🔹 Java MQTT Publisher

* Simulates or captures temperature data.
* Publishes categorized readings (`cold`, `nice`, `hot`) to specific MQTT topics using the Eclipse Paho MQTT client.

### 🔹 Web-Based MQTT Subscriber

* Built with HTML and JavaScript using Eclipse Paho MQTT over WebSockets.
* Allows users to filter and subscribe to temperature ranges via radio buttons.
* Displays real-time temperature readings with the latest updates shown first.

---

## 🚀 Key Features

* MQTT messaging over WebSockets for full-duplex communication.
* User-selectable temperature range subscriptions.
* Real-time temperature dashboard in the browser.
* Java backend using Maven for efficient project management.

---

## 🛠️ Technologies Used

* Java SE 8
* Eclipse Paho MQTT (Java and JavaScript clients)
* HTML, JavaScript
* Apache Maven, Ant
* WebSockets
* NetBeans (IDE)

---

## 🎯 Ideal For

* IoT and MQTT learning projects
* Educational use in real-time systems
* Prototyping smart monitoring applications
