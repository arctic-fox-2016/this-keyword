"use strict"

// GLOBAL CONTEXT




// CLASS CONTEXT


// RELEASE 1

class Pokemon {
  constructor(component) {

    //attack,defend,hp,mana,skill
    this._attack = component['attack'] // this digunakan untuk set property dari kelas itu
    this._defend = component['defend'] //
    this._hp = component['hp']
    this._mana = component['mana']

  }

  get attack() {
    return this._attack
  }
  set attack(attack) {
    return this._attack = attack;
  }

  get hp() {
    return this._hp
  }
  set hp(hp) {
    return this._hp = hp;
  }

  get mana() {
    return this._mana
  }
  set mana(mana) {
    return this._mana = mana;
  }

  get defend() {
    return this._defend
  }
  set defend(defend) {
    return this._defend = defend;
  }

  battle() {
   return this._hp -= this._attack;
  }
}

var dragonite = new Pokemon({
    attack : 300,
    defend : 400,
    hp : 2000,
    mana: 100
  });

console.log(dragonite)
dragonite.battle();
console.log(dragonite)
dragonite.attack = 500; // buat set
console.log(dragonite.attack)//buat get
console.log(dragonite)
