/*class Stacks {
    constructor(...stacks) {
        this.stacks = [...stacks] || [];
    }

    getStacks() {
        return this.stacks;
    }

    changeStacks(stacks) {
        this.stacks = stacks;

    }

    move(string) {
        let splitting = string.split(" ");
        let quantityToMove = splitting[1];
        let stackToTake = Number(splitting[3]) - 1;
        let stackToAdd = Number(splitting[5]) - 1;


        let stacks = this.getStacks();

        for(let i = 0 ; i < quantityToMove; i++) {
            let removeCrate = stacks[stackToTake].shift();
            stacks[stackToAdd].unshift(removeCrate);
        }

        this.changeStacks(stacks);


    }

    moveSeveralTimes(strings) {
        let orders = strings.split("\n");
        orders.forEach(order => this.move(order))
    }

    getFirstCrates() {
        let stacks = this.getStacks();
        let firstCrates = "";

        stacks.forEach(stack => firstCrates += stack[0])

        return firstCrates
    }
}

 */

class Stacks2 {
    constructor(...stacks) {
        this.stacks = [...stacks] || [];
    }

    getStacks() {
        return this.stacks;
    }

    changeStacks(stacks) {
        this.stacks = stacks;

    }

    move(string) {
        let splitting = string.split(" ");
        let quantityToMove = Number(splitting[1]);
        let stackToTake = Number(splitting[3]) - 1;
        let stackToAdd = Number(splitting[5]) - 1;


        let stacks = this.getStacks();

        if(quantityToMove === 1 ) {
            for(let i = 0 ; i < quantityToMove; i++) {
                let removeCrate = stacks[stackToTake].shift();
                stacks[stackToAdd].unshift(removeCrate);
            }
        } else {
            let lot = [];

            for(let i = 0 ; i < quantityToMove; i++) {
                let removeCrate = stacks[stackToTake].shift();
                lot.push(removeCrate)
            }

            let turn = lot.length;
            for(let i = 0 ; i < turn; i++) {
                let crateToMove = lot.pop();
                stacks[stackToAdd].unshift(crateToMove);
            }



        }


        this.changeStacks(stacks);


    }

    moveSeveralTimes(strings) {
        let orders = strings.split("\n");
        orders.forEach(order => this.move(order))
    }

    getFirstCrates() {
        let stacks = this.getStacks();
        let firstCrates = "";

        stacks.forEach(stack => firstCrates += stack[0])

        return firstCrates
    }
}


let input = "move 1 from 7 to 4\n" +
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
    "move 1 from 5 to 7"

/*
let myStack = new Stacks(
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

 */

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

//myStack.moveSeveralTimes(input);

//console.log(myStack.getFirstCrates());
console.log(myStack2.getStacks())

myStack2.moveSeveralTimes(input);

console.log(myStack2.getFirstCrates());








