var a=22;

console.log("a = " + a);
if (a==12) {
    console.log("correct")   
} else {
    console.log("not correct") 
};

// multitasking with setTimeOut(callback)
console.log("Before setTimeout()");
setTimeout(function() {
console.log("In the callback function");
}, 5000);// 5000 milliseconds, or 5 seconds
console.log("After setTimeout()");

console.log(time(), "Before setTimeout()");
setTimeout(function() {
console.log(time(), "In the callback function");
}, 5000);  // 5000 = 5 seconds
console.log(time(), "After setTimeout()");
function time() {
 // return time as HH:MM:SS
 var date = new Date();
 var hour = date.getHours();
 var min = date.getMinutes();
 var sec = date.getSeconds();
 if (hour < 10) hour = "0" + hour;
 if (min < 10) min = "0" + min;
 if (sec < 10) sec = "0" + sec;
 return "" + hour + ":" + min + ":" + sec + " ";
}

// multitasking with setInterval(callback, timeout)

// console.log(time(), "Start of timer");
// var count = 1;
// setInterval(function() {
// console.log(time(), `count = ${count}`);
// count++;
// }, 1000); // 1000 = 1 second
// function time() {
//  // return time as HH:MM:SS
//  var date = new Date();
//  var hour = date.getHours();
//  var min = date.getMinutes();
//  var sec = date.getSeconds();
//  if (hour < 10) hour = "0" + hour;
//  if (min < 10) min = "0" + min;
//  if (sec < 10) sec = "0" + sec;
//  return "" + hour + ":" + min + ":" + sec + " ";
// }

// to stop cycle above
console.log(time(), "Start of timer");
var count = 1;
var timer = setInterval(function() {
console.log(time(), `count = ${count}`);
if (count == 5) {
clearInterval(timer);// timer stop
console.log(time(), "End of timer");
} else count++;
}, 1000);
function time() {
 // return time as HH:MM:SS
 var date = new Date();
 var hour = date.getHours();
 var min = date.getMinutes();
 var sec = date.getSeconds();
 if (hour < 10) hour = "0" + hour;
 if (min < 10) min = "0" + min;
 if (sec < 10) sec = "0" + sec;
 return "" + hour + ":" + min + ":" + sec + " ";
}

// Promise object - another way to write callback function
function time() {
    // return time as HH:MM:SS
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    return "" + hour + ":" + min + ":" + sec + " ";
   }
   function wait(sec) {
   return new Promise(function(resolve, reject) {
   setTimeout(function() {
   resolve(sec);// triggers the then() method
   }, sec*1000);
   });
   }
   console.log(time(), "Start of timer");
   wait(2).then(function(sec) {
   console.log(time(), `End of timer of ${sec} seconds`);
   });
