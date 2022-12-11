class Stacks {
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

module.exports={Stacks, Stacks2}


