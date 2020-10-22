function badTwoSum(arr, targetSum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) return true;
    }
  }
  return false;
}

function okayTwoSum1(arr, targetSum) {
  arr.sort();
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    let currentSum = arr[i] + arr[j];
    if (currentSum > targetSum) {
      j -= 1;
    } else if (currentSum < targetSum) {
      i += 1;
    } else {
      return true;
    }
  }

  return false;
}

function okayTwoSum2(arr, targetSum) {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let complement = targetSum - num;
    let complement_idx = binarySearch(arr, complement);
    if (complement_idx != -1 && complement_idx != i) {
      return true;
    }
  }

  return false;
}

function twoSum(arr, targetSum) {
  // Code goes here ...
}

function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}

const arr = [0, 1, 5, 7];
console.log(twoSum(arr, 6)); // => should be true
console.log(twoSum(arr, 10)); // => should be falseconst arr = [0, 1, 5, 7];
console.log(twoSum(arr, 6)); // => should be true
console.log(twoSum(arr, 10)); // => should be false
