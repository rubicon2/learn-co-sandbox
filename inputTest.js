const readline = require("readline");

var terminate = false;
var commands = ["talk", "eat", "run", "exit"];

while(!terminate) {
  
  // Get user input from console. 
  var input = readline;
  
  // Match against array of acceptable inputs. 
  switch(input.toLowerCase()) {
    
    case "talk":
      break;
      
    case "eat": 
      break; 
      
    case "run":
      break; 
      
    case "exit":
      terminate = true;
      break; 
      
    default:
      console.log("That action is not recognised!");
      break;
      
  }
}