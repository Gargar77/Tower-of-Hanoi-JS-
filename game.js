class Game {

    constructor() {
     
        this.towers = [
            [1,2,3],
            [],
            []
        ];
        this.originalStack = [
            [1,2,3],
            [],
            []
        ]
    }

    run(reader,completionCallback) {

        this.promptMove(reader,completionCallback,this.move);
    }

    promptMove(reader,completionCallback,moveCallback) {
        this.print();
        reader.question("choose a tower :\n>", (startTowerIdx)=> {
            reader.question("Where do you want to move the disk?\n>", (endTowerIdx)=> {

                let that = this
                let hasMoved = moveCallback(startTowerIdx,endTowerIdx,that);
               

                if (!hasMoved) {
                    throw new Error("Invalid Move!!");
                } else if (that.isWon()) {
                    console.log("YOU WIN!!");
                    completionCallback();
                } else {
                    that.run(reader,completionCallback,moveCallback);
                }
            })
        });
        
    }

    isValidMove(startTowerIdx,endTowerIdx) {
      
        let startTower = this.towers[startTowerIdx]
        let endTower = this.towers[endTowerIdx]
        
        if( startTower[0] === undefined) return false;
        if( endTower[0] !== undefined && 
            endTower[0] < startTower[0]) return false; 
        return true;
    }

    move(startTowerIdx,endTowerIdx,that) {
    
        if(!that.isValidMove(startTowerIdx,endTowerIdx)) return false;

        const diskToMove = that.towers[startTowerIdx].shift();
        that.towers[endTowerIdx].unshift(diskToMove);
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

module.exports = Game;


// game = new Game();

// game.promptMove();

// game.towers = [
//     [2],
//     [1,2],
//     [],
//     [2]
// ] 

// game.run(()=> {
//     console.log("YOU WIN!!");
// });


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
