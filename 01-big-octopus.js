function quadraticBiggestFish(fishes) {
  let longestFish = fishes[0];

  for (let i = 0; i < fishes.length; i++) {
    // 'fish'

    for (let j = 0; j < fishes.length; j++) {
      if (fishes[i].length > fishes[j].length) {
        longestFish = fishes[i];
      }
    }
  }
  return longestFish;
}

// console.log(quadraticBiggestFish(fishies)); //fiiiissshhhhhh

function nlognBiggestFish(fishes) {
  let newFishies = fishes.sort((fish1, fish2) => fish1.length - fish2.length);
  return newFishies[newFishies.length - 1];
  // let longestFish = newFishies[0];
  // for (let i = 1; i < newFishies.length; i++) {
  //   if (newFishies[i].length > longestFish.length) {
  //     longestFish = newFishies[i];
  //   }
  // }
  // return longestFish;
}

// console.log(nlognBiggestFish(fishies));
// O(n * log(n)) => loglinear

function linearBiggestFish(fishes) {
  let bigFish = fishes[0];
  for (let i = 1; i < fishes.length; i++) {
    // console.log(fishes[i]);
    if (fishes[i].length > bigFish.length) {
      bigFish = fishes[i];
    }
  }
  return bigFish;
}

const fishies = [
  "fish",
  "fiiish",
  "fiiiiish",
  "fiiiish",
  "fffish",
  "ffiiiiisshh",
  "fsh",
  "fiiiissshhhhhh",
];

// console.log(linearBiggestFish(fishies));

tilesArray = [
  "up",
  "right-up",
  "right",
  "right-down",
  "down",
  "left-down",
  "left",
  "left-up",
];
function slowDance(direction, tilesArray) {
  for (let i = 0; i < tilesArray.length; i++) {
    if (tilesArray[i] === direction) {
      return i;
    }
  }
}
console.log(slowDance("up", tilesArray));

tilesObj = {
  up: 0,
  "right-up": 1,
  right: 2,
  "right-down": 3,
  down: 4,
  "left-down": 5,
  left: 6,
  "left-up": 7,
};
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
