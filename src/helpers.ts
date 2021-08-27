export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomFruit() {
  const chance = Math.random();
  if (chance <= 0.05) {
    return { name: "banana", points: null };
  } else if (chance > 0.05 && chance <= 0.2) {
    return { name: "strawberry", points: 30 };
  } else if (chance > 0.2 && chance <= 0.4) {
    return { name: "watermelon", points: 20 };
  } else if (chance > 0.4 && chance <= 0.7) {
    return { name: "orange", points: 10 };
  } else if (chance > 0.7 && chance <= 1) {
    return { name: "red-apple", points: 5 };
  }
}
