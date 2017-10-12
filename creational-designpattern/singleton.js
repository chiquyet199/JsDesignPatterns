/**
 * DEFINITION
 * This is a design pattern that restricts the instantiation of a class to one object.
 * Usually, the goal is to manaage global application state. Make sure there is will be only one instance all over application.
 * A singleton should be immutable by the consumming code
 * 
 * HELPFUL REFERENCE LINK: https://www.sitepoint.com/whats-so-bad-about-the-singleton/
 */

//Orginal
var UserStore = (function(){
    var _instance;

    function constructor(){
        //methods
        //props
        return {};
    }

    function getInstance(){
        if(!_instance) _instance = constructor();
        return _instance;
    }

    return {
        getInstance: getInstance
    }
}());

//Alternative Simple store for hypothetical Flux implementation using module pattern and ES6

var UserStore = (function () {
    var _data = [];

    function add(item) {
        _data.push(item);
    }

    function get(id) {
        return_.data.find((d) => {
            return d.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
}());

class UserStore {
    constructor() {
        if (!UserStore._instance) {
            this._data = [];
            UserStore._instance = this;
        }
        return UserStore._instance;
    }

    add(item) {
        this._data.push(item);
    }

    get(id) {
        return this._data.find(d => d.id === id);
    }
}
const instance = new UserStore();
Object.freeze(instance);
export default instance;