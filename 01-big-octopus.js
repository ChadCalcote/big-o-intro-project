function quadraticBiggestFish(fishes) {
  let longestFish = '';

  for (let i = 0; i < fishes.length; i++) { // 'fish'

    for (let j = 0; j < fishes.length; j++) {
      if (fishes[i].length > fishes[j].length) {
        console.log('J fish', fishes[j]);
        console.log('I fish', fishes[i]);
        // longestFish = fishes[i];
      }
    }
  }

}

const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

quadraticBiggestFish(fishies);


function nlognBiggestFish(fishes) {
  
}

// O(n * log(n)) => loglinear


function linearBiggestFish(fishes) {
  // Code goes here ...
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
}

/*

Big O-ctopus and Biggest Fish
Sluggish
longest fish in O(n^2) time 
compare all lengths to all other lengths

Dominant
Find longest in O(n log n) time
Use Array.sort() method

Clever
O(n) time

Dancing Octopus

Slow Dance
Iterate through array to return the tentacle number

Constant Dance
Access the tentacle number in O(1) time



*/