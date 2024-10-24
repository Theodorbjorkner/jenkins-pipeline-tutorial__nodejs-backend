const express = require("express");
const app = express();

let serverStartTimestamp;

function startServer(port){
    app.listen(port, () =>{
        console.log("the server is listening at 127.0.0.1:${port}");
        serverStartTimestamp = getTimestamp();
    });
}

app.get("/", (req, res) => {
    // calculate running time
    const timeStamp = getTimestamp();
    const runningTime= timeStamp - serverStartTimestamp;
    const runningTimeSeconds = Math.floor(runningTime / 1000);

    // generate response message
    const responseMessage = 'The time is now ${timeStamp}<br />' + 
    'the server is running for ${runningTimeSeconds} seconds <br />' + 
    'App version ${process.env.npm_package_version}';
  // sending the response
  res.statusCode = 200;
  res.send(responseMessage); 
});

function getTimestamp(){
    const dateNow = new Date();
    const timeStamp = dateNow.getTime();
    return timeStamp; 
}

