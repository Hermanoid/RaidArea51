import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnemyService {

  constructor() { }
}


function Opponent(firstName, lastName, age, combatOffense, combatDefense, hack, health) {
  let _this = this;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.combatOffense = combatOffense;
  this.combatDefense = combatDefense;
  this.hack = hack;
  this.health = health;
}
