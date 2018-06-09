# Clock
    * for testing stuff like setInterval, setTimeout, etc
    * the jasmine clock is available for testing time dependent clode.
    * it is installed by invoking jasmine.clock().install()
    * be sure to uninstall the clock after you are done to restore original functions
        ..* typically with afterEach()
    
## setTimout
```javascript
describe("a simple setTimout", function(){
    var sample;
    beforeEach(function(){
        sample = jasmine.createSpy("sampleRunction");
        jasmine.clock().install();
    });
    afterEach(function(){
        jasmine.clock().uninstall();
    });
});

it("is only invoked after 1000 milliseconds", function(){
    setTimeout(function(){
        sample();
    }, 1000);
    jasmine.clock().tick(999);
    expect(sample).not.toHaveBeenCalled();
    jasmine.clock().tick(1);
    expect(sample).toHaveBeenCalled();
});

```

# testing async code
    * Jasmine also has support for running specs that require testing async code
    * beforeAll, afterAll, beforeEach, afterEach, and it take an optional single argument
        ..* commonly called "done"
    * 'done' should be called when the async work is complete
    * a test will not complete until it's done is invoked

```javascript
function getUserInfo(username){
    return $.getJSON("https://api.github.com/users/" + username);
}

describe("#getUserInfo", function(){
    it("returns the correct name for the user", function(done){
        getUserInfo("gerkx").then(function(data){
            expect(data.name).toBe("Patrick Gerke");
            done();
        });
    });
});

```
