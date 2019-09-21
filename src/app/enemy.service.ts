import { Opponent, OpponentWeapon } from 'src/app/Opponent';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EnemyService {
  Enemies: { [name: string]: Opponent } = {
    FBIAgent: {
      firstName: "Bob",
      lastName: "Classified"
    }
  }
  opponent: Opponent = new Opponent(null, null, null, null, null, null, null, null, null);
  opponentweapon: OpponentWeapon = new OpponentWeapon()
  constructor() { }
  OpponentCharacter
}
//export class PlayerService {
//  player: Player = new Player(null, null, null, null, null, null, null, null, null);
//  weapon: PlayerWeapon = new PlayerWeapon(null, null, null, null, null, null, null, null);

//  constructor() { }
//  PlayerCharacter() {
//    this.player.firstName = "";
//    this.player.lastName = "";
//    this.player.age = 0;
//    this.player.combatOffense = 0;
//    this.player.combatDefense = 0;
//    this.player.luck = 0;
//    this.player.hack = 0;
//    this.player.health = 0;
//    //This was brought to you by Nick. Thank you for bringing understanding!
//  }
//  PlayerWeapon() {
//    this.weapon.name = "";
//    this.weapon.range = "";
//    this.weapon.minDamage = 0;
//    this.weapon.maxDamage = 0;
//    this.weapon.weight = 0;
//    this.weapon.toHitModifier = 0;
//    this.weapon.rateOfFire = 0;
//    this.weapon.cost = 0;
//  }
//}
