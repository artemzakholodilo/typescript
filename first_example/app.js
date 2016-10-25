var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.name = name;
        this.lastName = lastName;
        this.setFullName();
    }
    Person.prototype.setFullName = function () {
        this.fullName = this.name + " " + this.lastName;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
        return age;
    };
    return Person;
}());
var HelloOldPerson = (function (_super) {
    __extends(HelloOldPerson, _super);
    function HelloOldPerson() {
        _super.apply(this, arguments);
    }
    HelloOldPerson.prototype.helloWorld = function () {
        console.log("Hello world!");
    };
    HelloOldPerson.prototype.sayHi = function () {
        console.log("Hi " + this.fullName + "! Your age is " + this.getAge());
    };
    HelloOldPerson.prototype.getAge = function () {
        return this.age;
    };
    HelloOldPerson.prototype.setAge = function (age) {
        var newAge = _super.prototype.setAge.call(this, age);
        this.age = newAge * 2;
        return newAge;
    };
    return HelloOldPerson;
}(Person));
var example = new HelloOldPerson("Artem", "Zakholodylo");
example.setAge(24);
example.sayHi();
