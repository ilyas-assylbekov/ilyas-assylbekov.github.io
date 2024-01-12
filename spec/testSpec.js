import { addTwoNumbers } from "../testJasmine.js";

describe( "jasmineTest", () => {
    it("should add two numbers", () => {
        expect( addTwoNumbers(1,1) ).toEqual(2);
    });
} )