/**
 * References: https://developers.caffeina.com/object-composition-patterns-in-javascript-4853898bb9d0
 *             https://medium.com/humans-create-software/composition-over-inheritance-cb6f88070205
 * Composition -> What they do  /  has a
 * Inheritance -> What they are /  is a
 * 
 * Requirement: Having a Dog and Cat object, Cat can 'meow' and Dog can 'bark'. Both can 'poop'. 
 * Having CleanRobot and KillingRobot, CleanRobot can 'clean' KillingRobot can 'kill'. Both can 'drive'
 * We will solve this by using both composition and inheritance. Then we will compare.
 */

 /*INHERITANCE */
function Animals(){}
Animals.prototype.poop = function(){}

function Cat(){
    Animals.call(this);
    this.meow = function(){}
}
 
function Dog(){
    Animals.call(this);
    this.bark = function(){}
}

function Robot(){}
Robot.prototype.drive = function(){}

function KillingRobot(){
    Robot.call(this);
    this.kill = function(){}
}

function CleanRobot(){
    Robot.call(this);
    this.clean = function(){}
}

/*COMPOSITION */
function Cat(){
    this.meow = function(){}
}
 
function Dog(){
    this.bark = function(){}
}

function KillingRobot(){
    this.kill = function(){}
}

function CleanRobot(){
    this.clean = function(){}
}

var pooper = function(){console.log('pooped')};
var driver = function(){console.log('driving')};
Cat.prototype.poop = pooper;
Dog.prototype.poop = pooper;
CleanRobot.prototype.drive = driver; 
KillingRobot.prototype.drive = driver; 

/**
 * It's seem both inheritance and composition can able to solve the requirement smoothly.
 * BUT: What if we have additional requirement from customer to make DogKillingRobot which can 'drive' 'bark' and 'kill'
 * Composition will be the good match to adapt this requirement. Inheritance will be more complex and hard to implement
 */