/*
 * A Challenge, Should You Choose to Accept It
 * Can you modify the breadth-first search algorithm in such a way that it will traverse both nested objects
 * and nested arrays (or even a mix of both)?
 *
 * LET'S SEE SHALL WE?!
 */

<<<<<<< HEAD
// NESTED ARRAYS
var test = [["brie", "camembert"], ["heinz beans", "branston beans"]]; 
var criteria = "brie";

=======
>>>>>>> 7d0dacae0e16370fd1e1a10f9f04d1e31ef9b4e0
function find(array, criteriaFn) {
  
  let current = array;
  let next = []; 
  
<<<<<<< HEAD
  // I.e. while current is not null/undefined etc. 
=======
>>>>>>> 7d0dacae0e16370fd1e1a10f9f04d1e31ef9b4e0
  while(current || current === 0) {
    
    if(criteriaFn === current) {
      return current; 
    }
    
<<<<<<< HEAD
    // If current object we're looking at is an array... 
    if(Array.isArray(current)) {
      // Go through all the elements...
      for(let i = 0; i < current.length; i++) {
        
        // And add them to the end of next[].
        next.push(current[i]);
        
        // I.e. if current is an array of 3 arrays, the arrays themelves will be added 1, 2, 3. 
        // Then this loop will finish, current will be set to 1.
        // If 1 has sub arrays they will be added onto the end of next, i.e. 1, 2, 3, 1a, 1b, 1c, 2a, 2b...
        // Hence breadth first search!! 
      }
    }
    
    // This line removes the first element from next[] and "gives" it to current. 
    if(Array.isArray(current)) {
      for(let i = 0; i < current.length; i++) {
        next.push(current[i]);
      }
    }
=======
    if(Array.isArray(current)) {
      for(let i = 0; i < current.length; i++) {
        next.push(current[i]);
      }
    }
    
>>>>>>> 7d0dacae0e16370fd1e1a10f9f04d1e31ef9b4e0
    current = next.shift(); 
  }
  return null; 
}

<<<<<<< HEAD
// NESTED OBJECTS
var shop = { type: "technology", opens: "0900", closes: "1700", 
            employees: [{ name: "Jimmy Bobby", position: "Vice President", age: 71 }, 
                        { name: "Sandra Jameson", position: "Vice President", age: 23 }, 
                        { name: "Billy Jimbo", position: "Turnip Supervisor", age: 34}]}; 
var criteria2 = "Billy Jimbo"; 

function find2(object, criteriaFn) {
  
  // Unpack all arrays and objects into the following arrays...
  let keys = [];
  let values = [];
  
  // I.e. while current is not null/undefined etc. 
  while(current || current === 0) {
    
    // Need to iterate over object properties and add to next[]. 
    // Need separate arrays for keys and values? 
    // If it's a regular array, just add to the values array and stick something in 
    // the keys array so we know we want to be matching the value, not the key. 
    // Duplicate keys not possible tho! 
    
  }
  return null; 
}

// Gets keys from the top level of an object only. 
function getKeys(object) {
  let keys = [];
  for(let key in object) {
    keys.push(key);
  }
  return keys; 
}

// Gets keys from all levels of an object. 
function getAllKeys(object) {
  let objects = []; 
}

console.log(find(shop, criteria2)); 
console.log(getKeys(shop)); 
console.log(shop.employees[0]); 
=======
var test = [["brie", "camembert"], ["heinz beans", "branston beans"]]; 
var criteria = "brie"; 

console.log(find(test, criteria)); 
>>>>>>> 7d0dacae0e16370fd1e1a10f9f04d1e31ef9b4e0
