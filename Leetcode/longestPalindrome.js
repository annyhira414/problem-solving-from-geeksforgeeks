const longestPalindrom = (s) => {
  let len = 0;
  let map = new Map();
  for (let c of s) {
    // each character is s
    let n = 0;
    if (map.has(c)) {
      n = map.get(c);
      if (n % 2) len += 2;
    }
    map.set(c, n + 1);
  }
  return s.length > len ? len + 1 : len;
};

console.log(longestPalindrom("abccccdd"));
