//function OpponentModel(firstName, lastName, age, combatOffense, combatDefense, hack, health) {
//  let _this = this;
//  this.firstName = firstName;
//  this.lastName = lastName;
//  this.age = age;
//  this.combatOffense = combatOffense;
//  this.combatDefense = combatDefense;
//  this.hack = hack;
//  this.health = health;
//}

export class Opponent {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public combatOffense: number,
    public combatDefense: number,
    public luck: number,
    public hack: number,
    public health: number,
    public image: string
  ) {}
}

export class OpponentWeapon {
  //name, range, minDamage, maxDamage, weight, toHitModifier, rateOfFire, cost
  constructor(
    public name: string =null,
    public range: number = null,
    public minDamage: number = null,
    public maxDamage: number = null,
    public weight: number = null,
    public toHitModifier: number = null,
    public rateOfFire: number = null,
    public cost: number = null
  ) {}
}


//export class Player {
//  constructor(
//    public firstName: string,
//    public lastName: string,
//    public age: number,
//    public combatOffense: number,
//    public combatDefense: number,
//    public luck: number,
//    public hack: number,
//    public health: number,
//    public image: string
//  ) { }
//}
//export class PlayerWeapon {
//  //name, range, minDamage, maxDamage, weight, toHitModifier, rateOfFire, cost
//  constructor(
//    public name: string,
//    public range: string,
//    public minDamage: number,
//    public maxDamage: number,
//    public weight: number,
//    public toHitModifier: number,
//    public rateOfFire: number,
//    public cost: number
//  ) { }
//}
