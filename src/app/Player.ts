//let bountyHunter = new BountyHunter(null, null, null, null, null, null, null, null);
//let money = 0;
//let bhOffenseTotal = 0;
//let bhDefenseTotal = 0;
//let damage = 0;


//name: string;
//weight: number;
//cost: number;
//description: string;





//function PlayerCharacter(firstName, lastName, age, combatOffense, combatDefense, luck, hack, health) {
//  let _this = this;
//  this.firstName = firstName;
//  this.lastName = lastName;
//  this.age = age;
//  this.combatOffense = combatOffense;
//  this.combatDefense = combatDefense;
//  this.luck = luck;
//  this.hack = hack;
//  this.health = health;
//}

export class Player {
  constructor(
    public firstName: string =null,
    public lastName: string = null,
    public age: number = null,
    public combatOffense: number = null,
    public combatDefense: number = null,
    public luck: number = null,
    public hack: number = null,
    public health: number = null,
    public image: string = null
  ) {}
}
export class PlayerWeapon {
  //name, range, minDamage, maxDamage, weight, toHitModifier, rateOfFire, cost
  constructor(
    public name: string = null,
    public range: string = null,
    public minDamage: number = null,
    public maxDamage: number = null,
    public weight: number = null,
    public toHitModifier: number = null,
    public rateOfFire: number = null,
    public cost: number = null
  ) {}
}


//Points between hack, luck, health, combat offense, combat defense. Spend 40 skill points.
//export class Combat {

//}
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

//let attack = () => {
//  if (bhDefenseTotal <= 0) {
//    bountyHunter.health += bhDefenseTotal;
//  }
//  document.getElementById("bhHealth").innerHTML = bountyHunter.health;
//  document.getElementById("health").innerHTML = rehalRodian["health"];
//  if (bountyHunter.health < 0) {
//    window.location.href = "gameOver.html"
//  }
//  if (rehalRodian["health"] < 0 && bountyHunter.health >= 0) {
//    window.location.href = "bar1.html";
//    money = parseInt(sessionStorage.getItem("money"));
//    money = money + 800;
//    sessionStorage.setItem("money", money.toString());
//  }
//  if (bhOffenseTotal > 0) {
//    rehalRodian["health"] -= damage;
//    let toHitMod = getRandomInt(1, 10);

//    bhOffenseTotal = bountyHunter.combatOffense + toHitMod + bountyHunterWeapon.toHitModifier - rehalRodian["combatDefense"];
//    document.getElementById("bhHitChance").innerHTML = bhOffenseTotal.toString();
//    return bhOffenseTotal;
//  }
//}
