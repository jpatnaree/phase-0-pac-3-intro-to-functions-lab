

function shout(string) {
    return string.toUpperCase();
}


function whisper(string) {
    return string.toLowerCase();
}


function logShout(string) {
    console.log(string.toUpperCase());
}


function logWhisper(string) {
    console.log(string.toLowerCase());
}



const string = "HELLO";
function sayHiToHeadphonedRoommate(string) {
    // if (string === string.toLowerCase()) {
    //     //block of code0
    //     return "I can't hear you!";
    // }  
    // if (string === string.toUpperCase()) {
    //     return "YES INDEED!";
    // }
    // if (string === "Let's have dinner together!") {
    //     return "I would love to!"
    // }

let response;
    switch (string) {
        case string.toLowerCase():
            response = "I can't hear you!"
            break;
        case string.toUpperCase():
            response = "YES INDEED!";
            break;
        case "Let's have dinner together!":
            response = "I would love to!";
            break;
        default:
           response = "";
    }
    return response;
}
sayHiToHeadphonedRoommate("Let's have dinner together!");