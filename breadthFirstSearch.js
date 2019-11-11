/*
 * A Challenge, Should You Choose to Accept It
 * Can you modify the breadth-first search algorithm in such a way that it will traverse both nested objects
 * and nested arrays (or even a mix of both)?
 *
 * LET'S SEE SHALL WE?!
 */

// NESTED ARRAYS
var test = [["brie", "camembert"], ["heinz beans", "branston beans"]]; 
var criteria = "brie";

function find(array, criteriaFn) {
  
  let current = array;
  let next = []; 
  
  // I.e. while current is not null/undefined etc. 
  while(current || current === 0) {
    
    if(criteriaFn === current) {
      return current; 
    }
    
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
    current = next.shift(); 
  }
  return null; 
}

// NESTED OBJECTS
var test2 = { beans: "baked", potatoes: "crispy"}; 
var criteria2 = "beans"; 

function find2(array, criteriaFn) {
  
  // Arrays can have a mix of types, so basically add all array elements/objects to this array. 
  let current = array;
  let next = []; 
  
  // I.e. while current is not null/undefined etc. 
  while(current || current === 0) {
    
    if(criteriaFn === current) {
      return current; 
    }
    
    // Need to iterate over object properties and add to next[]. 
    // Need separate arrays for keys and values? 
    
    current = next.shift(); 
  }
  return null; 
}

console.log(find(test, criteria)); 