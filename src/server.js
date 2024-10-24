const express = require("express");
const app = express();

let serverStartTimestamp;

function startServer(port){
    app.listen(port, () =>{
        console.log("the server is listening at 127.0.0.1:${port}");
        serverStartTimestamp = getTimestamp();
    });
}

function getTimestamp(){
    const dateNow = new Date();
    const timeStamp = dateNow.getTime();
    return timeStamp; 
}

