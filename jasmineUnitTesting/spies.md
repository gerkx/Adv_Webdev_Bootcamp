# Spies
    * in jasmine, mocks are called spies
        ..* test double functions
    * A spy can stub (mimic) any function and track calls to it and all arguments
    * Spies only exist in the describe or it block in which it is defined
    * Spies are removed after each spec
    * There are special matchers for interacting with spies

# Creating a spy
```javascript
function add(a,b,c){
    return a+b+c;
}

describe("add", function(){
    var addSpy, result;
    beforeEach(function(){
        addSpy = spyOn(window, 'add');
        result = addSpy(1,2,3);
    });
    it("it can have params tested", function(){
        expect(addSpy).toHaveBeenCalled();
        expect(addSpy).toHaveBeenCalledWith(1,2,3);
    });

});

```