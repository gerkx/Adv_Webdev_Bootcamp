# Jasmine Keywords
    * describe - "let me describe _____ for you"
        * it - "let me tell you about _______"
            * expect - "here's what I expect"
                * matchers: 
                    ..* toBe
                    ..* not.toBe
                    ..* toBeCloseTo
                    ..* toBeDefined
                    ..* toBeFalsey/toBeTruthy
                    ..* toBeGreaterThan/toBeLessThan
                    ..* toContain
                    ..* toEqual
                    ..* jasmine.any() - type checker

```javascript
var earth = {
    isRound: true,
    numberFromSun: 3,
}

describe("Earth", function(){
    it("is round", function(){
        expect(earth.isRound).toBe(true)
    });
    it("is the third planet from the sun", function(){
        expect(earth.numberFromSun).toBe(3)
    });
});

```

# beforeEach() & afterEach()
    * setup/teardown
    * helps keep code DRY
    * called once before each spec in the describe function
    * then after
    * afterEach resets vars before continuing

# Nesting describe blocks

```javascript
describe("Array", function(){
    var arr;
    beforeEach(function(){
        arr = [1,3,5];
    });
    describe("#unshift", function(){
        it("adds an element to the beginning of an array", function(){
            arr.unshift(17);
            expect(arr[0]).toBe(17);
        });
        it("returns a new length", function(){
            expect(arr.unshift(1000)).toBe(4);
        });
    });
    describe("#push", function(){
        it("adds elements to the end of an array", function(){
            arr.push(7);
            expect(arr[arr.length-1]).toBe(7);
        });
        it("returns a new length", function(){
            expect(arr.push(1000)).toBe(4;)
        });
    });
});

```

# Pending tests
    * add x in front of it : "xit"
    * declaring test without function: "it("can be delcared with it, but without cb fucntion")"
    * name function "pending()"

## can use more than one expect per it block, but should be related

