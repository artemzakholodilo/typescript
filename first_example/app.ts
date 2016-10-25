/**
 * name
 */
class Example {
    name: string = "Artem";

    constructor(name: string) {
        this.name = name;
    }

    helloWorld() {
        console.log("Hello " + this.name + "!");
    }
}

var example: Example = new Example("Artem");
example.helloWorld();