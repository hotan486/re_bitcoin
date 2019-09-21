const helloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", function functionName() {

    it("should be same as constantor argument", function(){
      return helloWorld.deployed().then(function(instance){
        return instance.say().then(function(greating){
          assert.equal(greeting, "Hello");
        })
      })
    })

    it("should be same as constantor argument", async function(){
      let instance = await helloWorld.deployed();
      let greeting = await instance.say();
      assert.equal(greeting, "Hello!");
    })
});
