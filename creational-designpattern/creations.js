/**
 * There are 5 ways to create thing in javascript
 * 1-Object literals
 * 2-Factory functions
 * 3-Prototype chains
 * 4-ES5 classes
 * 5-ES6 classes
 */

/**
 * OBJECT LITERALS
 * Benefit: Quick and easy to work with in some situations.
 * Drawback: If we need create same type of object in other places, then we will
 * end up with copy-pasting the object's methos, data, and initialization.
 */

var person = {
    name: 'Nguyen Chi Quyet',
    title: 'Sr Frontend Developer',
    getName: function () { }
}


/**
 * FACTORY FUNCTIONS
 * Benefit:  No `new` keyword, standard `this` behavior, no deceptive `instanceof`
 * Drawback: Cause memory bloat because each object contains its own unique copy of
 * each function. Ideally we want every object to share just one copy of its functions
 */

var createPerson = function () {
    return {
        name: 'Nguyen Chi Quyet',
        title: 'Sr Frontend Developer',
        getName: function () { }
    };
}
var person = createPerson();

/**
 * PROTOTYPE CHAIN
 * Drawback: This is going to result in som repetition. The first and last lines of the "createPerson"
 * function are going to be repeated almost verbatim in every such delegating to prototype factory fuction
 */

var createPerson = function () {
    var _person = Object.create(createPerson.prototype);
    _person.name = 'default name';
    _person.title = 'default title';

    return _person;
}

createPerson.prototype.getName = function () { };

var person = createPerson();

/**
 * ES5 classes
 * Drawback: It’s verbose and ugly, and implementing inheritance is even more verbose and ugly.
 */

Person.prototype.f = function () { };
Person.prototype.g = function () { };

function Person() {
    this.x = 42;
    this.y = 3.14;
}

var o = new Person();


/**
* ES6 classes
* Drawback: Even it have a bit better in term of performance but the this keyword maybe gone wrong in some cases.
*           Details of instantiation get leaked into the calling API (via the `new` requirement).
*           Constructors break the Open / Closed Principle (an API should be open for extension, but closed for modification.)
*           Using Constructors Enables the Deceptive `instanceof`. Explain below            
*/

class Person {
    constructor() {
        this.x = 42;
        this.y = 3.14;
    }

    f() { }
    g() { }
}

var o = new Person();


/**
 * Explain for instanceOf lie
 * instanceof is a prototype identity check. NOT a type check. That means it lies across execution contexts, 
 * when prototypes are dynamically reassigned, and when you throw confusing cases like this at it:
 */

function foo() {}
const bar = { a: 'a'};

foo.prototype = bar;

// Is bar an instance of foo? Nope!
console.log(bar instanceof foo); // false

// Ok... since bar is not an instance of foo,
// baz should definitely not be an instance of foo, right?
const baz = Object.create(bar);

// ...Wrong.
console.log(baz instanceof foo); // true. oops.