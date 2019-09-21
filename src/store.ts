let weapons = [
  ["Weapon", "Range", "Min Damage", "Max Damage", "Weight", "Attack Modifier", "Rate of Fire", "Cost"],
  ["'Super' Hot Sauce", "Short", 1, 60, 1, 0, 1, 80],
  ["Tazer", "Medium", 5, 10, 8, 4, 2, 60],
  ["Lighter and Propane", "Melee", 8, 18, 30, 5, 1, 90]
];

let items = [
  ["Name", "Weight", "Cost", "Description"],
  ["Kyle Fuel(Energy Drink)", 2, 7, "Gives you the energy to function hopefully without a heartattack."],
  ["Counterfeit Money(500)", 5, 50, "This money doesn't look quite right..."]
]
let weapon = new WeaponModel(null, null, null, null, null, null, null, null);

function WeaponModel(name, range, minDamage, maxDamage, weight, toHitModifier, rateOfFire, cost) {
  this.name = name;
  this.minDamage = minDamage;
  this.maxDamage = maxDamage;
  this.weight = weight;
  this.toHitModifier = toHitModifier;
  this.rateOfFire = rateOfFire;
  this.cost = cost;
}
export class Weapon {
  //name, range, minDamage, maxDamage, weight, toHitModifier, rateOfFire, cost
  name: string;
  range: number;
  minDamage: number;
  maxDamage: number;
  weight: number;
  toHitModifier: number;
  rateOfFire: number;
  cost: number;
}

//export class Armor {
////name, weight, damageReduction, durability, cost

//}

export class Item {
  //name, weight, cost, description
  name: string;
  weight: number;
  cost: number;
  description: string;
}
