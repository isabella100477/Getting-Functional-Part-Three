//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE




/*
1. Return the all friends of a given customers name.
When returning the friends of the customer it
should be a string and NOT the friends array. 
*/

function friendsOfCustomer(name){
  //CODE BELOW HERE
for(var i = 0; i <= customers.length - 1; i++){


if(name === customers(i).name){
console.log(true)

for(var o = 0; o <= customers[i].friends.length - 1; 0++){
console.log(customers[i].friends[0].name)
}
}
}


  //CODE ABOVE HERE
}
console.log(friendsOfCustomer('Shelly Walton'))




/*
2. Return the phone number and address of a 
given customer when thier name is entered into the 
function.
*/

function contactInfo(name){
  //CODE BELOW HERE



  //CODE ABOVE HERE
}