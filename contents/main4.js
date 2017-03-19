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
        for( e in message ){
                document.getElementById(e).innerHTML = message[e];
        }
});

document.getElementById('camstream').data = 'http://'
        + location.hostname
        + ':10000/stream?topic=/cv_camera_node/image_raw';

// Copyright 2016 Ryuichi Ueda
// Released under the MIT License.
// To make line numbers be identical with the book, this statement is written here. Don't move it to the header.
