export const EXCUSES = [
  { text: "The brake warning light is a feature. It reminds me to brake.", category: "brakes", believability: 1 },
  { text: "The pedal went to the floor because it was tired.", category: "brakes", believability: 1 },
  { text: "It stopped fine last Tuesday.", category: "brakes", believability: 2 },
  { text: "One headlight is for looking left. The other is spare.", category: "lights", believability: 1 },
  { text: "The indicator is only slow because it is being thoughtful.", category: "lights", believability: 2 },
  { text: "It was working when I parked it.", category: "lights", believability: 3 },
  { text: "That smoke is just the car showing enthusiasm.", category: "emissions", believability: 1 },
  { text: "It has only ever driven downhill, so it has had a hard life.", category: "emissions", believability: 2 },
  { text: "The exhaust is within a few puffs of the limit.", category: "emissions", believability: 2 },
];

export function listCategories() {
  return [...new Set(EXCUSES.map((e) => e.category))];
}

export function pickExcuse(random = Math.random) {
  const index = Math.floor(random() * EXCUSES.length);
  return EXCUSES[index];
}
