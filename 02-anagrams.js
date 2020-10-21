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
  let ele1 = str1.split('').sort().join('');
  let ele2 = str2.split('').sort().join('');

  return ele1 === ele2;
}

function thirdAnagram(str1, str2) {
  // Code goes here ....
}

function fourthAnagram(str1, str2) {
  // Code goes here ....
}

// console.log(secondAnagram("gizmo", "sally"));    // => false
// console.log(secondAnagram("elvis", "lives"));    // => true
