var answer = prompt("Are we there yet?");

//while (answer !== "yes" && answer !== "yeah") {
//    var answer = prompt("Are we there yet?");
//}
//alert("Yay! We made it!")

//VERSION 2
//use index of to see if answer contains yes or yeah

while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
   var answer = prompt("Are we there yet?");
}
alert("Yay! We made it!")