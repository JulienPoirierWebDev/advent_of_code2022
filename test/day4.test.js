const { fullyContain, partiallyContain } = require("../scripts/day4");

describe("Assignement fully contain the other", () => {

    test("should return true when fully contain", () => {
        expect(fullyContain("50-50,50-87")).toEqual(true);
    })

    test("should same", () => {
        expect(fullyContain("2-92,2-86")).toEqual(true)
    })

    test("should return false when not contain at all", () => {
        expect(fullyContain("8-15,18-50")).toEqual(false)
    })

})

describe("Assignement partially contain the other", () => {
    test("should return true when fully contain", () => {
        expect(partiallyContain("50-50,50-87")).toEqual(true);
    })

    test("should same", () => {
        expect(partiallyContain("2-92,2-86")).toEqual(true)
    })

    test("should return false when not contain at all", () => {
        expect(partiallyContain("8-15,18-50")).toEqual(false)
    })

    test("should return when partially contain", () => {
        expect(partiallyContain("5-7,7-9")).toEqual(true)
    })

    test("should return when partially contain", () => {
        expect(partiallyContain("6-6,4-6")).toEqual(true)
    })

    test("should return when partially contain", () => {
        expect(partiallyContain("2-6,4-8")).toEqual(true)
    })

    test("should return when partially contain", () => {
        expect(partiallyContain("4-8,2-6")).toEqual(true)
    })

})
