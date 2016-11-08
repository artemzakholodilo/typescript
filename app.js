/**
 * name
 */
var Example = (function () {
    function Example(name) {
        this.name = "Artem";
        this.name = name;
    }
    Example.prototype.helloWorld = function () {
        console.log("Hello " + this.name + " !");
    };
    return Example;
}());
var example = new Example("Artem");
example.helloWorld();
