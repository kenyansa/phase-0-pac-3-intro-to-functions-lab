// receives one argument and returns it in all caps
function shout(string){
    return string.toUpperCase();
}
// recevies one argument and returns it in all caps
function whisper(string){
    return string.toLowerCase();
}
// takes a string and logs it in all caps using console.log ()
function logShout(string) {
  console.log(string.toUpperCase());
}
// takes a string argument and logs it all lowercase using console.log ()
function logWhisper(string) {
  console.log(string.toLowerCase());
}
// sayHiToHeadphonedRoommate(string): returns "I can't hear you!" if `string` is lowercase:
// sayHiToHeadphonedRoommate(string): returns "YES INDEED!" if `string` is uppercase:
// sayHiToHeadphonedRoommate(string) : returns "I would love to!" if `string` is "Let's have dinner together!"`:


function sayHiToHeadphonedRoommate(string) {
  const almostDumb = "I can't hear you!";
  const loudAndClear = "YES INDEED!";
  const loveInTheAir = "I would love to!";
  if (string.toLowerCase(string) === string) {
    return almostDumb;
  } else if (string.toUpperCase(string) === string) {
    return loudAndClear;
  } else if ("Let's have dinner together!" === string) {
    return loveInTheAir;
  }
}