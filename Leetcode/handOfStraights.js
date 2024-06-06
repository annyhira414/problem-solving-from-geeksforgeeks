const isNStraightHand = (hand, groupSize) => {
  const count = new Map();

  // Count the frequency of each card
  for (const card of hand) {
    count.set(card, (count.get(card) || 0) + 1);
  }

  // Check for the straight hand condition
  for (const [start, _] of Array.from(count.entries())) {
    const value = count.get(start);
    if (value > 0) {
      for (let i = start; i < start + groupSize; ++i) {
        if (!count.has(i) || count.get(i) < value) {
          return false;
        }
        count.set(i, count.get(i) - value);
      }
    }
  }

  return true;
};

let hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
let groupSize = 3;

console.log(isNStraightHand(hand, groupSize));
