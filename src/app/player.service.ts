import { Player, PlayerWeapon } from 'src/app/Player';
import { EnemyService } from 'src/app/enemy.service';
import { Injectable } from '@angular/core';
import { Opponent } from 'src/app/Opponent';



@Injectable({
  providedIn: 'root'
})


export class PlayerService {
  player: Player = new Player(null, null, null, null, null, null, null, null, null);
  weapon: PlayerWeapon = new PlayerWeapon(null, null, null, null, null, null, null, null);

  constructor(private enemyService: EnemyService) {

  }
  //PlayerCharacter() {
  //  this.player.firstName = "";
  //  this.player.lastName = "";
  //  this.player.age = 0;
  //  this.player.combatOffense = 0;
  //  this.player.combatDefense = 0;
  //  this.player.luck = 0;
  //  this.player.hack = 0;
  //  this.player.health = 0;
  //  //This was brought to you by Nick. Thank you for bringing understanding!
  //}
  //PlayerWeapon() {
  //  this.weapon.name = "";
  //  this.weapon.range = "";
  //  this.weapon.minDamage = 0;
  //  this.weapon.maxDamage = 0;
  //  this.weapon.weight = 0;
  //  this.weapon.toHitModifier = 0;
  //  this.weapon.rateOfFire = 0;
  //  this.weapon.cost = 0;
  //}

  Attack(enemyName: string) {
    let playerCombatOffense = 10;
    let playerCombatDefense = 10;
    let playerHealth = 25;


    let opponentCombatOffense = 6;
    let opponentCombatDefense = 6;
    let opponentHealth = 10;

    let enemy = this.enemyService.Enemies[enemyName];
    let enemyWeapon = this.enemyService.opponentweapon;

    if (playerCombatOffense >= opponentCombatDefense) {
      enemy.health -= 7;
    }
    if (playerCombatDefense === 10) {
      this.player.health -= 5;
    }
  }
}


//public name: string,
//  public range: number,
//    public minDamage: number,
//      public maxDamage: number,
//        public weight: number,
//          public toHitModifier: number,
//            public rateOfFire: number,
//              public cost: number

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
