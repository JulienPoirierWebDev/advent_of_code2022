const {Stacks, Stacks2} = require("../scripts/day5");


describe("Stacks",
    () => {
        it(
            "Should create a Stacks",
            ()=>{
                let myStacks = new Stacks();
                const result = myStacks.getStacks();
                expect(result).toEqual([])
        }),

        it(
            "Should accept stacks as parameter",
            ()=> {
                let myStacks = new Stacks(["N","Z"]);
                const result = myStacks.getStacks();
                expect(result).toEqual([["N","Z"]])
            },
        )

        it(
            "Should accept multiple stacks as parameter",
            ()=> {
                let myStacks = new Stacks(["N","Z"],["D", "C", "M"]);
                const result = myStacks.getStacks();
                expect(result).toEqual([["N","Z"],["D", "C", "M"]])
            },
        )

        it(
            "Should modify stacks",
                ()=> {
                    let myStacks = new Stacks(["N","Z"],["D", "C", "M"]);
                    myStacks.changeStacks([["Z"],["D", "C", "M"]])
                    const result = myStacks.getStacks();
                    expect(result).toEqual([["Z"],["D", "C", "M"]])

                })

        it(
            "Should move one element of top of one Stack",
            () => {
                let myStacks = new Stacks(["N","Z"],["D", "C", "M"], ["P"]);
                myStacks.move("move 1 from 2 to 1")
                let result = myStacks.getStacks();
                expect(result).toEqual([["D","N","Z"],["C", "M"], ["P"]])
            }
        )

        it(
            "Should move several elements of top of one Stack",
            () => {
                let myStacks = new Stacks(["D","N","Z"],["C", "M"], ["P"]);
                myStacks.move("move 3 from 1 to 3")
                let result = myStacks.getStacks();
                expect(result).toEqual([[],["C", "M"], ["Z","N", "D", "P"]])
            }
        )

        it(
            "Should move several elements of top of one Stack",
            () => {
                let myStacks = new Stacks([],["C", "M"], ["Z","N", "D", "P"]);
                myStacks.move("move 2 from 2 to 1")
                let result = myStacks.getStacks();
                expect(result).toEqual([["M", "C"],[], ["Z","N", "D", "P"]])
            }
        )

        it(
            "Should accept several orders",
            () => {
                let myStacks = new Stacks(["N","Z"],["D", "C", "M"], ["P"]);
                myStacks.moveSeveralTimes("move 1 from 2 to 1\n" +
                    "move 3 from 1 to 3\n" +
                    "move 2 from 2 to 1\n" +
                    "move 1 from 1 to 2")
                let result = myStacks.getStacks();
                expect(result).toEqual([["C"],["M"], ["Z","N", "D", "P"]])
            }
        )

        it(
            "Should return first crates of each stack",
            () => {
                let myStacks = new Stacks(["N","Z"],["D", "C", "M"], ["P"]);
                myStacks.moveSeveralTimes("move 1 from 2 to 1\n" +
                    "move 3 from 1 to 3\n" +
                    "move 2 from 2 to 1\n" +
                    "move 1 from 1 to 2")
                let result = myStacks.getFirstCrates();
                expect(result).toEqual("CMZ")

            }
            )
})


describe("Stacks2",
    () => {


        it(
            "Should move one element of top of one Stack",
            () => {
                let myStacks = new Stacks2(["N","Z"],["D", "C", "M"], ["P"]);
                myStacks.move("move 1 from 2 to 1")
                let result = myStacks.getStacks();
                expect(result).toEqual([["D","N","Z"],["C", "M"], ["P"]])
            }
        )

        it(
            "Should move several elements of top of one Stack",
            () => {
                let myStacks = new Stacks2(["D","N","Z"],["C", "M"], ["P"]);
                myStacks.move("move 3 from 1 to 3")
                let result = myStacks.getStacks();
                expect(result).toEqual([[],["C", "M"], ["D","N", "Z", "P"]])
            }
        )


        it(
            "Should move several elements of top of one Stack",
            () => {
                let myStacks = new Stacks2([],["C", "M"], ["D","N", "Z", "P"]);
                myStacks.move("move 2 from 2 to 1")
                let result = myStacks.getStacks();
                expect(result).toEqual([["C", "M"],[], ["D","N", "Z", "P"]])
            }
        )


        it(
            "Should move several elements of top of one Stack",
            () => {
                let myStacks = new Stacks2(["C", "M"],[], ["D","N", "Z", "P"]);
                myStacks.move("move 1 from 1 to 2")
                let result = myStacks.getStacks();
                expect(result).toEqual([["M"],["C"], ["D","N", "Z", "P"]])
            }
        )

        it(
            "Should accept several orders",
            () => {
                let myStacks = new Stacks2(["N","Z"],["D", "C", "M"], ["P"]);
                myStacks.moveSeveralTimes("move 1 from 2 to 1\n" +
                    "move 3 from 1 to 3\n" +
                    "move 2 from 2 to 1\n" +
                    "move 1 from 1 to 2")
                let result = myStacks.getStacks();
                expect(result).toEqual([["M"],["C"], ["D","N", "Z", "P"]])
            }
        )

        it(
            "Should return first crates of each stack",
            () => {
                let myStacks = new Stacks2(["N","Z"],["D", "C", "M"], ["P"]);
                myStacks.moveSeveralTimes("move 1 from 2 to 1\n" +
                    "move 3 from 1 to 3\n" +
                    "move 2 from 2 to 1\n" +
                    "move 1 from 1 to 2")
                let result = myStacks.getFirstCrates();
                expect(result).toEqual("MCD")

            }
        )

            it(
                "Should accept complex stacks",
                    () => {
                            let myStack2 = new Stacks2(
                                ["G","B","D","C","P","R"],
                                ["G","V","H"],
                                ["M","P","J","D","Q","S","N"],
                                ["M","N", "C", "D", "G", "L", "S", "P"],
                                ["S", "L", "F","P","C","N","B","Q"],
                                ["S","T","G","V","Z","D","B","Q"],
                                ["Q","T","F","H","M","Z","B"],
                                ["F","B","D","M","C"],
                                ["G","Q","C","F"]
                            )
                            let result = myStack2.getStacks();
                            expect(result).toEqual([["G","B","D","C","P","R"],
                                    ["G","V","H"],
                                    ["M","P","J","D","Q","S","N"],
                                    ["M","N", "C", "D", "G", "L", "S", "P"],
                                    ["S", "L", "F","P","C","N","B","Q"],
                                    ["S","T","G","V","Z","D","B","Q"],
                                    ["Q","T","F","H","M","Z","B"],
                                    ["F","B","D","M","C"],
                                    ["G","Q","C","F"]])
                    }
            )

            it(
                "Should return response to advent of code",
                () => {
                        let myStack2 = new Stacks2(["G","B","D","C","P","R"],["G","V","H"],["M","P","J","D","Q","S","N"],["M","N", "C", "D", "G", "L", "S", "P"], ["S", "L", "F","P","C","N","B","Q"],["S","T","G","V","Z","D","B","Q"],["Q","T","F","H","M","Z","B"],["F","B","D","M","C"],["G","Q","C","F"]
                        )
                        myStack2.moveSeveralTimes("move 1 from 7 to 4\n" +
                            "move 3 from 4 to 7\n" +
                            "move 4 from 3 to 4\n" +
                            "move 5 from 6 to 9\n" +
                            "move 1 from 8 to 1\n" +
                            "move 2 from 3 to 2\n" +
                            "move 3 from 4 to 6\n" +
                            "move 1 from 3 to 6\n" +
                            "move 9 from 7 to 1\n" +
                            "move 1 from 2 to 4\n" +
                            "move 3 from 4 to 9\n" +
                            "move 4 from 9 to 8\n" +
                            "move 6 from 8 to 2\n" +
                            "move 1 from 8 to 6\n" +
                            "move 1 from 4 to 1\n" +
                            "move 11 from 1 to 7\n" +
                            "move 1 from 4 to 7\n" +
                            "move 7 from 2 to 5\n" +
                            "move 5 from 6 to 3\n" +
                            "move 2 from 4 to 3\n" +
                            "move 2 from 5 to 9\n" +
                            "move 1 from 8 to 6\n" +
                            "move 3 from 1 to 5\n" +
                            "move 2 from 6 to 9\n" +
                            "move 1 from 4 to 8\n" +
                            "move 2 from 2 to 1\n" +
                            "move 7 from 5 to 9\n" +
                            "move 6 from 3 to 6\n" +
                            "move 1 from 2 to 5\n" +
                            "move 1 from 3 to 8\n" +
                            "move 12 from 7 to 3\n" +
                            "move 1 from 1 to 8\n" +
                            "move 2 from 1 to 9\n" +
                            "move 20 from 9 to 5\n" +
                            "move 1 from 1 to 7\n" +
                            "move 5 from 5 to 3\n" +
                            "move 1 from 8 to 7\n" +
                            "move 2 from 8 to 3\n" +
                            "move 2 from 6 to 5\n" +
                            "move 1 from 6 to 4\n" +
                            "move 18 from 3 to 2\n" +
                            "move 1 from 4 to 2\n" +
                            "move 1 from 7 to 9\n" +
                            "move 1 from 1 to 9\n" +
                            "move 1 from 6 to 1\n" +
                            "move 8 from 5 to 2\n" +
                            "move 1 from 1 to 6\n" +
                            "move 19 from 5 to 2\n" +
                            "move 5 from 2 to 6\n" +
                            "move 2 from 9 to 7\n" +
                            "move 20 from 2 to 1\n" +
                            "move 1 from 9 to 4\n" +
                            "move 8 from 6 to 2\n" +
                            "move 5 from 1 to 3\n" +
                            "move 27 from 2 to 1\n" +
                            "move 34 from 1 to 7\n" +
                            "move 1 from 2 to 6\n" +
                            "move 2 from 3 to 1\n" +
                            "move 1 from 4 to 9\n" +
                            "move 1 from 2 to 6\n" +
                            "move 2 from 1 to 7\n" +
                            "move 1 from 6 to 7\n" +
                            "move 1 from 9 to 3\n" +
                            "move 2 from 6 to 3\n" +
                            "move 1 from 6 to 4\n" +
                            "move 5 from 3 to 4\n" +
                            "move 5 from 4 to 2\n" +
                            "move 4 from 1 to 4\n" +
                            "move 4 from 1 to 4\n" +
                            "move 2 from 3 to 6\n" +
                            "move 1 from 6 to 9\n" +
                            "move 25 from 7 to 5\n" +
                            "move 1 from 6 to 4\n" +
                            "move 17 from 5 to 2\n" +
                            "move 14 from 7 to 6\n" +
                            "move 1 from 7 to 3\n" +
                            "move 1 from 9 to 3\n" +
                            "move 10 from 2 to 3\n" +
                            "move 2 from 2 to 9\n" +
                            "move 12 from 3 to 5\n" +
                            "move 18 from 5 to 8\n" +
                            "move 1 from 4 to 2\n" +
                            "move 5 from 2 to 1\n" +
                            "move 1 from 5 to 3\n" +
                            "move 3 from 2 to 1\n" +
                            "move 1 from 2 to 7\n" +
                            "move 2 from 2 to 6\n" +
                            "move 9 from 6 to 7\n" +
                            "move 16 from 8 to 2\n" +
                            "move 6 from 7 to 3\n" +
                            "move 2 from 8 to 9\n" +
                            "move 1 from 1 to 8\n" +
                            "move 16 from 2 to 6\n" +
                            "move 1 from 8 to 3\n" +
                            "move 2 from 1 to 2\n" +
                            "move 1 from 9 to 3\n" +
                            "move 7 from 4 to 1\n" +
                            "move 7 from 3 to 7\n" +
                            "move 9 from 7 to 8\n" +
                            "move 1 from 5 to 6\n" +
                            "move 2 from 9 to 7\n" +
                            "move 1 from 9 to 5\n" +
                            "move 11 from 6 to 8\n" +
                            "move 1 from 3 to 1\n" +
                            "move 1 from 4 to 2\n" +
                            "move 2 from 8 to 5\n" +
                            "move 3 from 5 to 8\n" +
                            "move 2 from 1 to 9\n" +
                            "move 5 from 1 to 4\n" +
                            "move 3 from 4 to 1\n" +
                            "move 1 from 3 to 2\n" +
                            "move 3 from 2 to 1\n" +
                            "move 1 from 9 to 1\n" +
                            "move 1 from 2 to 5\n" +
                            "move 2 from 4 to 7\n" +
                            "move 20 from 8 to 5\n" +
                            "move 1 from 9 to 7\n" +
                            "move 11 from 6 to 1\n" +
                            "move 17 from 1 to 5\n" +
                            "move 1 from 8 to 2\n" +
                            "move 7 from 5 to 8\n" +
                            "move 1 from 4 to 5\n" +
                            "move 2 from 1 to 2\n" +
                            "move 2 from 8 to 4\n" +
                            "move 4 from 7 to 6\n" +
                            "move 2 from 6 to 8\n" +
                            "move 2 from 1 to 2\n" +
                            "move 1 from 1 to 4\n" +
                            "move 4 from 8 to 9\n" +
                            "move 2 from 1 to 9\n" +
                            "move 3 from 8 to 1\n" +
                            "move 25 from 5 to 2\n" +
                            "move 23 from 2 to 1\n" +
                            "move 1 from 7 to 1\n" +
                            "move 6 from 9 to 8\n" +
                            "move 6 from 8 to 3\n" +
                            "move 3 from 6 to 2\n" +
                            "move 10 from 1 to 2\n" +
                            "move 1 from 6 to 3\n" +
                            "move 2 from 3 to 6\n" +
                            "move 2 from 3 to 2\n" +
                            "move 2 from 6 to 8\n" +
                            "move 1 from 4 to 6\n" +
                            "move 14 from 1 to 9\n" +
                            "move 2 from 3 to 4\n" +
                            "move 14 from 2 to 4\n" +
                            "move 1 from 6 to 9\n" +
                            "move 17 from 4 to 3\n" +
                            "move 1 from 8 to 6\n" +
                            "move 2 from 7 to 2\n" +
                            "move 1 from 4 to 2\n" +
                            "move 1 from 5 to 9\n" +
                            "move 9 from 2 to 4\n" +
                            "move 17 from 3 to 7\n" +
                            "move 3 from 4 to 2\n" +
                            "move 1 from 8 to 3\n" +
                            "move 4 from 5 to 7\n" +
                            "move 1 from 3 to 6\n" +
                            "move 1 from 4 to 5\n" +
                            "move 14 from 7 to 9\n" +
                            "move 2 from 1 to 9\n" +
                            "move 3 from 2 to 1\n" +
                            "move 1 from 2 to 5\n" +
                            "move 1 from 3 to 7\n" +
                            "move 4 from 1 to 2\n" +
                            "move 2 from 6 to 7\n" +
                            "move 3 from 9 to 8\n" +
                            "move 4 from 2 to 4\n" +
                            "move 17 from 9 to 7\n" +
                            "move 1 from 2 to 8\n" +
                            "move 8 from 9 to 6\n" +
                            "move 1 from 8 to 2\n" +
                            "move 19 from 7 to 9\n" +
                            "move 9 from 4 to 2\n" +
                            "move 5 from 7 to 3\n" +
                            "move 3 from 5 to 9\n" +
                            "move 6 from 2 to 5\n" +
                            "move 1 from 9 to 4\n" +
                            "move 3 from 2 to 9\n" +
                            "move 25 from 9 to 5\n" +
                            "move 1 from 3 to 6\n" +
                            "move 2 from 5 to 8\n" +
                            "move 6 from 6 to 7\n" +
                            "move 1 from 3 to 4\n" +
                            "move 2 from 3 to 4\n" +
                            "move 1 from 8 to 2\n" +
                            "move 2 from 2 to 9\n" +
                            "move 2 from 8 to 3\n" +
                            "move 5 from 7 to 6\n" +
                            "move 3 from 7 to 9\n" +
                            "move 7 from 5 to 8\n" +
                            "move 2 from 3 to 5\n" +
                            "move 1 from 3 to 5\n" +
                            "move 1 from 6 to 2\n" +
                            "move 6 from 9 to 5\n" +
                            "move 1 from 9 to 2\n" +
                            "move 1 from 6 to 9\n" +
                            "move 2 from 5 to 6\n" +
                            "move 2 from 9 to 8\n" +
                            "move 11 from 8 to 1\n" +
                            "move 2 from 5 to 9\n" +
                            "move 3 from 6 to 5\n" +
                            "move 1 from 4 to 7\n" +
                            "move 5 from 5 to 7\n" +
                            "move 1 from 4 to 8\n" +
                            "move 7 from 7 to 2\n" +
                            "move 12 from 5 to 2\n" +
                            "move 10 from 1 to 8\n" +
                            "move 1 from 9 to 6\n" +
                            "move 3 from 8 to 1\n" +
                            "move 1 from 1 to 6\n" +
                            "move 10 from 2 to 3\n" +
                            "move 8 from 8 to 7\n" +
                            "move 1 from 9 to 8\n" +
                            "move 2 from 3 to 5\n" +
                            "move 14 from 5 to 8\n" +
                            "move 1 from 3 to 2\n" +
                            "move 3 from 8 to 1\n" +
                            "move 3 from 8 to 4\n" +
                            "move 3 from 2 to 4\n" +
                            "move 5 from 6 to 4\n" +
                            "move 8 from 7 to 9\n" +
                            "move 6 from 8 to 7\n" +
                            "move 1 from 5 to 7\n" +
                            "move 6 from 2 to 9\n" +
                            "move 4 from 4 to 6\n" +
                            "move 4 from 4 to 9\n" +
                            "move 3 from 9 to 3\n" +
                            "move 1 from 8 to 6\n" +
                            "move 1 from 5 to 6\n" +
                            "move 2 from 7 to 2\n" +
                            "move 1 from 3 to 4\n" +
                            "move 3 from 4 to 1\n" +
                            "move 3 from 4 to 3\n" +
                            "move 5 from 6 to 4\n" +
                            "move 4 from 3 to 8\n" +
                            "move 1 from 6 to 4\n" +
                            "move 8 from 3 to 2\n" +
                            "move 2 from 8 to 5\n" +
                            "move 11 from 9 to 7\n" +
                            "move 9 from 1 to 9\n" +
                            "move 2 from 7 to 3\n" +
                            "move 1 from 6 to 8\n" +
                            "move 1 from 6 to 5\n" +
                            "move 5 from 9 to 8\n" +
                            "move 3 from 9 to 7\n" +
                            "move 2 from 9 to 1\n" +
                            "move 2 from 3 to 7\n" +
                            "move 12 from 7 to 1\n" +
                            "move 2 from 8 to 9\n" +
                            "move 5 from 4 to 5\n" +
                            "move 4 from 9 to 4\n" +
                            "move 1 from 1 to 3\n" +
                            "move 7 from 1 to 3\n" +
                            "move 7 from 5 to 6\n" +
                            "move 1 from 9 to 1\n" +
                            "move 1 from 5 to 1\n" +
                            "move 5 from 7 to 8\n" +
                            "move 4 from 6 to 7\n" +
                            "move 5 from 1 to 8\n" +
                            "move 1 from 4 to 3\n" +
                            "move 12 from 8 to 7\n" +
                            "move 2 from 2 to 4\n" +
                            "move 2 from 8 to 9\n" +
                            "move 3 from 8 to 2\n" +
                            "move 2 from 6 to 7\n" +
                            "move 4 from 7 to 8\n" +
                            "move 1 from 6 to 8\n" +
                            "move 4 from 3 to 2\n" +
                            "move 15 from 7 to 8\n" +
                            "move 1 from 7 to 6\n" +
                            "move 3 from 3 to 5\n" +
                            "move 2 from 3 to 4\n" +
                            "move 5 from 2 to 5\n" +
                            "move 3 from 1 to 5\n" +
                            "move 4 from 5 to 6\n" +
                            "move 4 from 5 to 9\n" +
                            "move 1 from 5 to 7\n" +
                            "move 4 from 9 to 4\n" +
                            "move 2 from 2 to 9\n" +
                            "move 2 from 5 to 2\n" +
                            "move 2 from 2 to 1\n" +
                            "move 3 from 4 to 9\n" +
                            "move 2 from 9 to 4\n" +
                            "move 2 from 8 to 5\n" +
                            "move 2 from 5 to 2\n" +
                            "move 8 from 2 to 4\n" +
                            "move 2 from 1 to 3\n" +
                            "move 2 from 3 to 5\n" +
                            "move 3 from 6 to 9\n" +
                            "move 2 from 6 to 1\n" +
                            "move 2 from 1 to 4\n" +
                            "move 1 from 2 to 4\n" +
                            "move 1 from 5 to 7\n" +
                            "move 2 from 2 to 7\n" +
                            "move 18 from 4 to 2\n" +
                            "move 1 from 5 to 9\n" +
                            "move 2 from 7 to 9\n" +
                            "move 18 from 8 to 4\n" +
                            "move 1 from 7 to 8\n" +
                            "move 22 from 4 to 8\n" +
                            "move 6 from 2 to 6\n" +
                            "move 3 from 6 to 8\n" +
                            "move 3 from 6 to 4\n" +
                            "move 3 from 4 to 7\n" +
                            "move 3 from 7 to 1\n" +
                            "move 14 from 2 to 3\n" +
                            "move 10 from 3 to 2\n" +
                            "move 27 from 8 to 1\n" +
                            "move 1 from 7 to 6\n" +
                            "move 1 from 3 to 7\n" +
                            "move 2 from 2 to 8\n" +
                            "move 2 from 9 to 8\n" +
                            "move 18 from 1 to 4\n" +
                            "move 6 from 1 to 5\n" +
                            "move 10 from 4 to 7\n" +
                            "move 1 from 3 to 7\n" +
                            "move 4 from 7 to 2\n" +
                            "move 3 from 9 to 7\n" +
                            "move 1 from 6 to 5\n" +
                            "move 1 from 2 to 7\n" +
                            "move 2 from 5 to 6\n" +
                            "move 2 from 6 to 5\n" +
                            "move 3 from 5 to 1\n" +
                            "move 6 from 1 to 3\n" +
                            "move 4 from 5 to 9\n" +
                            "move 11 from 2 to 9\n" +
                            "move 2 from 1 to 6\n" +
                            "move 3 from 4 to 6\n" +
                            "move 5 from 7 to 3\n" +
                            "move 2 from 6 to 1\n" +
                            "move 2 from 1 to 5\n" +
                            "move 1 from 8 to 2\n" +
                            "move 1 from 1 to 8\n" +
                            "move 1 from 6 to 4\n" +
                            "move 2 from 4 to 5\n" +
                            "move 4 from 5 to 9\n" +
                            "move 11 from 3 to 6\n" +
                            "move 1 from 3 to 6\n" +
                            "move 8 from 6 to 5\n" +
                            "move 1 from 3 to 5\n" +
                            "move 4 from 4 to 8\n" +
                            "move 21 from 9 to 6\n" +
                            "move 2 from 9 to 5\n" +
                            "move 1 from 9 to 3\n" +
                            "move 1 from 2 to 6\n" +
                            "move 7 from 8 to 6\n" +
                            "move 12 from 6 to 5\n" +
                            "move 1 from 8 to 2\n" +
                            "move 10 from 6 to 7\n" +
                            "move 15 from 7 to 2\n" +
                            "move 2 from 7 to 3\n" +
                            "move 13 from 6 to 8\n" +
                            "move 9 from 5 to 1\n" +
                            "move 12 from 5 to 3\n" +
                            "move 1 from 2 to 3\n" +
                            "move 1 from 9 to 7\n" +
                            "move 9 from 3 to 4\n" +
                            "move 3 from 4 to 6\n" +
                            "move 1 from 7 to 6\n" +
                            "move 6 from 4 to 1\n" +
                            "move 2 from 5 to 2\n" +
                            "move 6 from 1 to 8\n" +
                            "move 9 from 8 to 6\n" +
                            "move 7 from 3 to 2\n" +
                            "move 1 from 2 to 9\n" +
                            "move 9 from 6 to 1\n" +
                            "move 13 from 1 to 7\n" +
                            "move 4 from 8 to 5\n" +
                            "move 2 from 7 to 1\n" +
                            "move 3 from 6 to 4\n" +
                            "move 3 from 5 to 8\n" +
                            "move 3 from 2 to 6\n" +
                            "move 1 from 5 to 3\n" +
                            "move 1 from 3 to 4\n" +
                            "move 1 from 9 to 8\n" +
                            "move 3 from 8 to 7\n" +
                            "move 12 from 2 to 9\n" +
                            "move 10 from 7 to 4\n" +
                            "move 5 from 8 to 4\n" +
                            "move 1 from 8 to 5\n" +
                            "move 11 from 4 to 7\n" +
                            "move 8 from 9 to 7\n" +
                            "move 1 from 6 to 2\n" +
                            "move 8 from 2 to 6\n" +
                            "move 1 from 5 to 8\n" +
                            "move 4 from 1 to 5\n" +
                            "move 4 from 9 to 6\n" +
                            "move 3 from 1 to 3\n" +
                            "move 2 from 8 to 4\n" +
                            "move 1 from 7 to 6\n" +
                            "move 1 from 2 to 7\n" +
                            "move 2 from 3 to 7\n" +
                            "move 4 from 4 to 9\n" +
                            "move 11 from 6 to 9\n" +
                            "move 10 from 7 to 8\n" +
                            "move 1 from 3 to 4\n" +
                            "move 1 from 6 to 4\n" +
                            "move 4 from 5 to 7\n" +
                            "move 6 from 7 to 4\n" +
                            "move 1 from 8 to 7\n" +
                            "move 4 from 6 to 7\n" +
                            "move 12 from 4 to 8\n" +
                            "move 12 from 8 to 1\n" +
                            "move 1 from 8 to 2\n" +
                            "move 10 from 1 to 7\n" +
                            "move 2 from 4 to 1\n" +
                            "move 8 from 8 to 3\n" +
                            "move 4 from 1 to 6\n" +
                            "move 8 from 7 to 6\n" +
                            "move 2 from 6 to 5\n" +
                            "move 2 from 5 to 2\n" +
                            "move 13 from 9 to 3\n" +
                            "move 3 from 2 to 5\n" +
                            "move 8 from 3 to 4\n" +
                            "move 7 from 6 to 7\n" +
                            "move 1 from 9 to 2\n" +
                            "move 1 from 9 to 1\n" +
                            "move 2 from 6 to 4\n" +
                            "move 3 from 4 to 8\n" +
                            "move 1 from 1 to 7\n" +
                            "move 4 from 4 to 6\n" +
                            "move 3 from 8 to 7\n" +
                            "move 1 from 2 to 9\n" +
                            "move 1 from 5 to 2\n" +
                            "move 1 from 2 to 5\n" +
                            "move 2 from 4 to 5\n" +
                            "move 1 from 7 to 2\n" +
                            "move 13 from 3 to 4\n" +
                            "move 7 from 4 to 3\n" +
                            "move 4 from 5 to 9\n" +
                            "move 1 from 4 to 7\n" +
                            "move 5 from 6 to 3\n" +
                            "move 3 from 9 to 7\n" +
                            "move 10 from 7 to 8\n" +
                            "move 3 from 4 to 8\n" +
                            "move 1 from 5 to 4\n" +
                            "move 2 from 3 to 1\n" +
                            "move 3 from 7 to 4\n" +
                            "move 4 from 8 to 6\n" +
                            "move 2 from 9 to 3\n" +
                            "move 2 from 4 to 5\n" +
                            "move 4 from 4 to 3\n" +
                            "move 8 from 8 to 3\n" +
                            "move 3 from 6 to 8\n" +
                            "move 1 from 2 to 6\n" +
                            "move 5 from 7 to 9\n" +
                            "move 1 from 4 to 3\n" +
                            "move 3 from 7 to 5\n" +
                            "move 3 from 8 to 4\n" +
                            "move 7 from 7 to 5\n" +
                            "move 3 from 7 to 8\n" +
                            "move 1 from 9 to 8\n" +
                            "move 3 from 4 to 1\n" +
                            "move 1 from 5 to 8\n" +
                            "move 3 from 7 to 1\n" +
                            "move 6 from 8 to 3\n" +
                            "move 3 from 9 to 5\n" +
                            "move 2 from 6 to 5\n" +
                            "move 2 from 1 to 6\n" +
                            "move 16 from 3 to 8\n" +
                            "move 4 from 5 to 8\n" +
                            "move 4 from 3 to 8\n" +
                            "move 1 from 9 to 5\n" +
                            "move 1 from 6 to 5\n" +
                            "move 3 from 3 to 7\n" +
                            "move 6 from 1 to 6\n" +
                            "move 1 from 5 to 4\n" +
                            "move 3 from 5 to 2\n" +
                            "move 2 from 7 to 4\n" +
                            "move 1 from 2 to 8\n" +
                            "move 6 from 8 to 1\n" +
                            "move 2 from 4 to 5\n" +
                            "move 2 from 2 to 3\n" +
                            "move 7 from 8 to 7\n" +
                            "move 1 from 4 to 6\n" +
                            "move 3 from 6 to 4\n" +
                            "move 3 from 4 to 9\n" +
                            "move 3 from 6 to 3\n" +
                            "move 11 from 8 to 6\n" +
                            "move 12 from 5 to 4\n" +
                            "move 5 from 6 to 1\n" +
                            "move 9 from 3 to 2\n" +
                            "move 7 from 6 to 1\n" +
                            "move 7 from 7 to 8\n" +
                            "move 5 from 8 to 3\n" +
                            "move 2 from 3 to 6\n" +
                            "move 2 from 8 to 1\n" +
                            "move 1 from 7 to 2\n" +
                            "move 7 from 3 to 8\n" +
                            "move 1 from 9 to 1\n" +
                            "move 14 from 1 to 3\n" +
                            "move 9 from 2 to 8\n" +
                            "move 11 from 3 to 4\n" +
                            "move 22 from 4 to 1\n" +
                            "move 2 from 3 to 1\n" +
                            "move 16 from 8 to 4\n" +
                            "move 1 from 9 to 2\n" +
                            "move 3 from 6 to 9\n" +
                            "move 3 from 9 to 5\n" +
                            "move 1 from 2 to 6\n" +
                            "move 1 from 5 to 7")
                        let result = myStack2.getFirstCrates();
                        expect(result).toEqual("FGLQQCMBD")
                }
            )





    })
