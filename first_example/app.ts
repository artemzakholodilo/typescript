/**
 * name
 */
abstract class Person 
{
    firstName: string;
    lastName: string;
    fullName: string;
    age: number;
    
    constructor(firstName, lastName) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.setFullName();
    }

    protected setFullName() 
    {
        this.fullName = this.firstName + " " + this.lastName;
    }

    public setAge(age: number)
    {
        this.age = age;
    }

    abstract getAge():number;
    abstract sayHi():void;
}

class Hello extends Person 
{
    helloWorld() 
    {
        console.log("Hello world!");
    }

    sayHi():void
    {
        console.log("Hi " + this.fullName + "! Your age is " + this.getAge());
    }

    getAge():number
    {
        return this.age;
    }
}

var example: Hello = new Hello("Artem", "Zakholodylo");
example.setAge(24);
example.sayHi();