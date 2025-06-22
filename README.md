Project Title: Web-Based Temperature Sensor MQTT System

Description:

This project implements a complete IoT temperature monitoring system that uses the MQTT protocol to facilitate real-time communication between a simulated temperature sensor (publisher) and a dynamic web interface (subscriber). Developed in Java and JavaScript, the system includes:

Java MQTT Publisher

Simulates or captures temperature data.

Publishes categorized readings (cold, nice, hot) to specific MQTT topics using the Eclipse Paho MQTT client.

Web-Based MQTT Subscriber

Built using HTML and JavaScript with Eclipse Paho MQTT over WebSockets.

Dynamically subscribes to specific temperature topics based on user selection (radio buttons).

Displays temperature readings live, with the most recent at the top.

Key Features:

Full-duplex MQTT messaging using WebSockets.

User interface to filter and subscribe to specific temperature ranges.

Lightweight and real-time browser-based telemetry dashboard.

Java and Maven-based backend simulation for MQTT publishing.

Technologies Used:

Java SE 8

Eclipse Paho MQTT (Java & JavaScript clients)

HTML, JavaScript

Apache Maven, Ant

WebSockets

NetBeans for development support

Ideal For:

IoT/MQTT demonstrations

Educational projects in real-time systems

Smart monitoring prototypes
