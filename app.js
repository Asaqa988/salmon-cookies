'use strict';


console.log("Hello world!");

function random(min, max) {
    return Math.floor(math.random() * (max - min + 1)) + min;

}

let kittens=[];

function Kitten(name, intrest, isgoodwithdogs, isgoodwithothercats, isgoodwithkids) {



    this.name = name;
    this.age = 0;
    this.intrest = intrest;
    this.isgoodwithdogs = isgoodwithdogs;
    this.isgoodwithkids = isgoodwithkids;
    this.isgoodwithothercats = isgoodwithothercats;

    kittens.push(this)
}


Kitten.prototype.getAge = function () {
this.age=Math.random(3,12)+'months'

}


let frankie = new Kitten('frankie', ['napping', 'cuddiling', 'eating'], true, false, true);

let serena = new Kitten('serena', ['napping', 'cuddiling', 'eating'], true, false, true);
let jumber = new Kitten('jumber', ['napping', 'cuddiling', 'eating'], true, false, true);

// frankie.getAge();
// serena.getAge();

console.log(kittens);
 for (let i= 0; i < kittens.length; i++) {
kittens[i].getAge();
 }