function firstAnagram(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) >= 0) {
      count++;
    }
  }
  return count === str2.length;
}
console.log(firstAnagram("elvis", "lives")); // true
console.log(firstAnagram("gizmo", "sally")); // false

function secondAnagram(str1, str2) {
  // Code goes here ....
}

function thirdAnagram(str1, str2) {
  // Code goes here ....
}

function fourthAnagram(str1, str2) {
  // Code goes here ....
}
