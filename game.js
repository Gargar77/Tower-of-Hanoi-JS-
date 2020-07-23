class Game {

    constructor() {
        this.towers = [];
    }

    run() {
        //until all disks are in the last pole {

            // ask user("which disk to grab")
                // grab disk from desired pole
            // ask user ("what pole to place disk")
                // place disk on pole IF APPLICABLE

        // }
    }

    promptMove() {
        this.printTowers();
        const reader = this.setUpInterface();
        console.log("startIndex");
        reader.question("Where do you want to move the disk?",() => this.moveDisk());
    }

    setUpInterface() {
        const readline = require('readline');

        const reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return reader;
    }

    printTowers() {
        console.log("here are the towers!");
    }

    moveDisk() {
        console.log("moved to: endTowerIdx");
    }

    isValidMove(startTowerIdx,endTowerIdx) {
        // the end tower idx must have either:
            // an empty pole OR
            // a disk that is LARGER than the current disk
            // the disk will be saved in the tower in this format:
            //  [[{disk:2}],[{disk:1},{disk:2}]]
        let startTower = this.towers[startTowerIdx]
        let endTower = this.towers[endTowerIdx]
        
        if( startTower[0] === undefined) return false;
        if( endTower[0] !== undefined && 
            endTower[0]["disk"] < startTower[0]["disk"]) return false; 
        return true;
    }


}


game = new Game();

// game.promptMove();

// game.towers = [
//     [{disk:2}],
//     [{disk:1},{disk:2}],
//     [],
//     [{disk:2}]
// ]


// console.log(game.isValidMove(2,0)); //=> false
// console.log(game.isValidMove(0,1)); //=> false
// console.log(game.isValidMove(1,2)); //=>true
// console.log(game.isValidMove(1,3)); //=>true

