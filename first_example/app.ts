interface Human
{
    setAge(age: number):number;
    sayHi():void;
}

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

    protected setAge(age: number):number
    {
        this.age = age;
        return age;
    }

    abstract getAge():number;
    abstract sayHi():void;
}

class HelloOldPerson extends Person implements Human
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

    setAge(age: number):number
    {
        var newAge:number = super.setAge(age);
        this.age = newAge * 2;

        return newAge;
    }
}

var example: Human = new HelloOldPerson("Artem", "Zakholodylo");
example.setAge(24);
example.sayHi();