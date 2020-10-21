function firstAnagram(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) >= 0) {
      count++;
    }
  }
  return count === str2.length;
}

function secondAnagram(str1, str2) {
  let ele1 = str1.split("").sort().join("");
  let ele2 = str2.split("").sort().join("");

  return ele1 === ele2;
}

function thirdAnagram(str1, str2) {
  let str1Count = {};
  let str2Count = {};
  for (let i = 0; i < str1.length; i++) {
    if (str1Count[str1[i]] === undefined && str2Count[str2[i]] === undefined) {
      str1Count[str1[i]] = 1;
      str2Count[str2[i]] = 1;
    } else {
      str1Count[str1[i]]++;
      str2Count[str2[i]]++;
    }
  }
  for (letter in str1Count) {
    if (str1Count[letter] !== str2Count[letter]) {
      return false;
    }
  }
  return true;
}

function fourthAnagram(str1, str2) {
  // Code goes here ....
}

console.log(thirdAnagram("gizmo", "sally")); // => false
console.log(thirdAnagram("elvis", "lives")); // => true
