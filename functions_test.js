function sayHi(firstName, repeats) {
  var i;
  for (i = 0; i < repeats; i++) {
    switch(firstName) {
      
      case "Jimbo":
        console.log(`Howdy, ${firstName}! Nice to see you again.`);
        break;
        
      case "Susan":
        console.log(`Hey ${firstName}, how is your dog?`);
        break;
        
      default:
        console.log(`Hi, ${firstName}!`);
        break;
        
    }
  }
}

function addStuff(firstThing, secondThing) {
  return firstThing + secondThing;
}

sayHi(addStuff("Susan", " Beans"), addStuff(4, 3));