const HelloWorld = require("../src/HelloWorld");

describe("HelloWorld Should", () => {

    test("return Hello World", () => {
        let helloWorld = new HelloWorld();
        expect("Hello World").toEqual(helloWorld.helloWorld());
    });

});