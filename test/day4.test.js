const { fullyContain } = require("../scripts/day4");

describe("Assignement fully contain the other", () => {

    test("should return true when fully contain", () => {
        expect(fullyContain("50-50 50-87")).toEqual(true);
    })

    test("should same", () => {
        expect(fullyContain("2-92 2-86")).toEqual(true)
    })

    test("should return false when not contain at all", () => {
        expect(fullyContain("8-15 18-50")).toEqual(false)
    })

})
