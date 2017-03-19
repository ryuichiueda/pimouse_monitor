var ros = new ROSLIB.Ros({ url : 'ws://' + location.hostname + ':9000' });
                                                   
ros.on('connection', function() {console.log('websocket: connected'); });
ros.on('error', function(error) {console.log('websocket error: ', error); });
ros.on('close', function() {console.log('websocket: closed');});

var ls = new ROSLIB.Topic({
        ros : ros,
        name : '/lightsensors',
        messageType : 'pimouse_ros/LightSensorValues'
});

ls.subscribe(function(message) {
        str = JSON.stringify(message);
        document.getElementById("lightsensors").innerHTML = str;
        //$("#lightsensors").html(str); //このように書いてもよい
        console.log(str);                                  
});

// Copyright 2016 Ryuichi Ueda
// Released under the MIT License.
// To make line numbers be identical with the book, this statement is written here. Don't move it to the header.
