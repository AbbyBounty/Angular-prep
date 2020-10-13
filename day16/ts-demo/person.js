"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        if (age === void 0) { age = 0; }
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () { return this._name; },
        set: function (name) { this._name = name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () { return this._age; },
        set: function (age) { this._age = age; },
        enumerable: false,
        configurable: true
    });
    Person.prototype.printInfo = function () {
        console.log(this._name);
        console.log(this._age);
    };
    Person.prototype.canVote = function () {
        if (this._age >= 18) {
            console.log('eligible');
        }
        else {
            console.log(' not eligible');
        }
    };
    return Person;
}());
exports.Person = Person;
