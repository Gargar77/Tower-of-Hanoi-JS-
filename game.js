class Game {

    constructor() {
         // the disk will be saved in the tower in this format:
            //  [[{disk:2}],[{disk:1},{disk:2}]]
        this.towers = [];
        this.originalStack = [];
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
        reader.question("Where do you want to move the disk?",this.moveDisk)
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
           
        let startTower = this.towers[startTowerIdx]
        let endTower = this.towers[endTowerIdx]
        
        if( startTower[0] === undefined) return false;
        if( endTower[0] !== undefined && 
            endTower[0] < startTower[0]) return false; 
        return true;
    }

    move(startTowerIdx,endTowerIdx) {
        // performs ONLY if isValidMove === true
        // do the move!


        if(!this.isValidMove(startTowerIdx,endTowerIdx)) return false;

        const diskToMove = this.towers[startTowerIdx].shift();
        this.towers[endTowerIdx].unshift(diskToMove);
        return true;
    }

    print() {
        console.log(JSON.stringify(this.towers))
    }

    isWon() {
        if (this.towers === this.originalStack) return false;
        let fullStack = 0;
        this.towers.forEach ( (tower)=> {
            if(tower.length > 0) {
                fullStack +=1 
            }
        })

            return fullStack === 1 ? true : false;
        };





}


game = new Game();

// game.promptMove();

// game.towers = [
//     [2],
//     [1,2],
//     [],
//     [2]
// ] 


// =======testing:isValid()===========
//console.log(game.isValidMove(2,0)); //=> false
//console.log(game.isValidMove(0,1)); //=> false
//console.log(game.isValidMove(1,2)); //=>true
//console.log(game.isValidMove(1,3)); //=>true


// ==========Testing: move()==========
// console.log(game.towers);
// console.log(game.move(1,3));
// console.log(game.towers);


// console.log(game.towers);
// console.log(game.move(0,1));
// console.log(game.towers);

// console.log(game.towers);
// console.log(game.move(0,2));
// console.log(game.towers);



// =====Testing:print()===========

// game.towers = [
//     [2],
//     [1,2],
//     []
// ]

// game.print();

// ====Testing:isWon========

// game.originalStack = [
//     [1,2,3],
//     [],
//     []
// ]

// game.towers = [
//     [],
//     [1,2,3],
//     []
// ]

// console.log(game.isWon());
