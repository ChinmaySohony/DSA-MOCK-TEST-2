function mySqrt(x) {
  if (x <= 1) {
    return x;
  }

  let left = 0;
  let right = Math.floor(x / 2) + 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left - 1;
}

// Test Cases
console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(8)); // Output: 2
