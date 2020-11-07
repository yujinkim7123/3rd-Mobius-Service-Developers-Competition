# &Cube-Rosemary
## Introduction
The &Cube-Rosemary is the open source IoT gateway platform based on the oneM2M (http://www.oneM2M.org) standard. As one of the oneM2M platforms, &Cube-Rosemary provides common services functions to oneM2M applications and other oneM2M devices. So the &Cube-Rosemary can be used to provide proximity based IoT services. As defined in the specifications, &Cube-Rosemary as MN-CSE also provides interworking functionalities via IPE (Interworking Proxy Entity).

## Version
2.4.0

## System stucture
&Cube-Rosemary implementation of oneM2M MN-CSE which interconnects ASN-CSE or ADN-AE to IN-CSE.
<div align="center">
<img src="https://user-images.githubusercontent.com/29790334/28234222-3ef7135e-6938-11e7-9f0e-2d6d73a2047f.png" width="600"/>
</div>

## Installation
The &Cube-Rosemary is based on Node.js framework and uses MySQL for database.
<div align="center">
<img src="https://user-images.githubusercontent.com/29790334/28209096-00fdcaa0-68cc-11e7-9d15-0a7dde6accb7.png" width="400"/>
</div><br/>

- [MySQL Server](https://www.mysql.com/downloads/)<br/>
The MySQL is an open source RDB database so that it is free and ligth. And RDB is very suitable for storing tree data just like oneM2M resource stucture. Most of &Cube-Rosemary will work in a restricted hardware environment and the MySQL can work in most of embeded devices.

- [Node.js](https://nodejs.org/en/)<br/>
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world. Node.js is very powerful in service impelementation because it provide a rich and free web service API. So, we use it to make RESTful API base on the oneM2M standard.

- [Mosquitto](https://mosquitto.org/)<br/>
Eclipse Mosquitto™ is an open source (EPL/EDL licensed) message broker that implements the MQTT protocol versions 3.1 and 3.1.1. MQTT provides a lightweight method of carrying out messaging using a publish/subscribe model. This makes it suitable for "Internet of Things" messaging such as with low power sensors or mobile devices such as phones, embedded computers or microcontrollers like the Arduino.

- [&Cube-Rosemary](https://github.com/IoTKETI/nCube-Rosemary/archive/master.zip)<br/>
&Cube-Rosemary source codes are written in javascript. So they don't need any compilation or installation before running.

## Configuration
- Import SQL script<br/>
After installation of MySQL server, you need the DB Schema for storing oneM2M resources in &Cube-Rosemary. You can find this file in the foloowing &Cube-Rosemary source directory.
```
[nCube-Rosemary home]/mobius/mobiusdb.sql
```
- Run Mosquitto MQTT broker<br/>
```
mosquitto -v
```
- Open the &Cube-Rosemary source home directory
- Install dependent libraries as below
```
npm install
```
- Modify the configuration file "conf_mn.json" per your setting
```
{
  "parent": {
    "cbname": "Mobius",             //CSEbase name
    "cbcseid": "/Mobius",           //CSEbase ID
    "cbhost": "203.253.128.161",    //CSEbase host IP
    "cbhostport": "7579",           //CSEbase http hosting port
    "cbprotocol": "http",           //CSEbase communication protocol
    "mqttbroker": "203.253.128.161" //MQTT Broker IP 
  },
  "csebaseport": "7599",            //MN-CSE HTTP hosting IP
  "dbpass": "dksklfdug2"            //Local MySQL root password
}
```

## Run
Use node.js application execution command as below
```
node rosemary.js
```

<div align="center">
<img src="https://user-images.githubusercontent.com/29790334/28234276-da780bc6-6938-11e7-8224-ae3676e843fa.png" width="700"/>
</div><br/>

## Dependency Libraries
This is the list of library dependencies for &Cube-Rosemary 
- body-parser
- cbor
- coap
- crypto
- events
- express
- file-stream-rotator
- fs
- http
- https
- ip
- js2xmlparser
- merge
- morgan
- mqtt
- mysql
- shortid
- url
- util
- websocket
- xml2js
- xmlbuilder

## Document
If you want more details please dowload the full [installation guide document](https://github.com/IoTKETI/nCube-Rosemary/raw/master/doc/Installation%20Guide%20Rosemary_v2.0.0_EN(170719).pdf).

# Author
Il Yeup (iyahn@keti.re.kr; ryeubi@gmail.com)
