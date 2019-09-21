//let bountyHunter = new BountyHunter(null, null, null, null, null, null, null, null);
//let money = 0;
//let bhOffenseTotal = 0;
//let bhDefenseTotal = 0;
//let damage = 0;

function BountyHunter(firstName, lastName, age, combatOffense, combatDefense, luck, hack, health) {
  let _this = this;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.combatOffense = combatOffense;
  this.combatDefense = combatDefense;
  this.luck = luck;
  this.hack = hack;
  this.health = health;
}

export class Player {

  firstName: string;
  lastName: string;
  age: number;
  combatOffense: number;
  combatDefense: number;
  luck: number;
  hack: number;
  health: number;
  image: string;
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

//Points between hack, luck, health, combat offense, combat defense. Spend 40 skill points.
export class Combat {

}
//let getBountyHunterData = () => {
//  createBountyHunter();
//  getBountyHunterWeaponInfo(bountyHunter.equipWeapon);

//  damage = getRandomInt(bountyHunterWeapon.minDamage, bountyHunterWeapon.maxDamage);
//  let toHitMod = getRandomInt(1, 10);

//  bhOffenseTotal = bountyHunter.combatOffense + toHitMod + bountyHunterWeapon.toHitModifier - rehalRodian["combatDefense"];
//  bhDefenseTotal = bountyHunter.combatDefense - rehalRodian["combatOffense"] - getRandomInt(1, 20);

//  document.getElementById("bhHitChance").innerHTML = bhOffenseTotal.toString();
//  document.getElementById("bhGetHitChance").innerHTML = bhDefenseTotal.toString();
//  document.getElementById("bhFirstName").innerHTML = bountyHunter.firstName;
//  document.getElementById("bhLastName").innerHTML = bountyHunter.lastName;
//  document.getElementById("bhHealth").innerHTML = bountyHunter.health.toString();

//};
