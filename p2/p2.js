function gcdOfStrings(str1, str2) {
  // recursive function to calculate the GCD of two numbers
  function gcd(a, b) {
    console.log(a, b);
    return b === 0 ? a : gcd(b, a % b);
  }

  // Step 1: Check if str1 and str2 match or not
  if (str1 + str2 !== str2 + str1) {
    return ""; // No common pattern exists
  }

  // Step 2: Find the GCD of the lengths of str1 and str2
  const len1 = str1.length;
  const len2 = str2.length;
  const gcdLength = gcd(len1, len2);

  // Step 3: The largest divisor substring
  return str1.substring(0, gcdLength);
}

// Example usage:
console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE")); // Output: ""
