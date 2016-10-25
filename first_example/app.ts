interface Individual
{
    name: string;
    age: number;    
}

interface Human extends Individual
{
    lastName: string;

    setAge(age: number): number;
    sayHi(): void;
}

abstract class Person implements Human 
{
    fullName: string;

    constructor(public name:string, public lastName:string) 
    {
        this.name = name;
        this.lastName = lastName;
        this.setFullName();
    }

    protected setFullName() 
    {
        this.fullName = this.name + " " + this.lastName;
    }

    setAge(age: number): number 
    {
        this.age = age;
        return age;
    }

    abstract getAge(): number;
    abstract sayHi(): void;
}

class HelloOldPerson extends Person 
{
    helloWorld() 
    {
        console.log("Hello world!");
    }

    sayHi(): void 
    {
        console.log("Hi " + this.fullName + "! Your age is " + this.getAge());
    }

    getAge(): number 
    {
        return this.age;
    }

    setAge(age: number): number 
    {
        var newAge: number = super.setAge(age);
        this.age = newAge * 2;

        return newAge;
    }
}

var example: Person = new HelloOldPerson("Artem", "Zakholodylo");
example.setAge(24);
example.sayHi();