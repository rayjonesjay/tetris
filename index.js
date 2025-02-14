const canvas = document.getElementById('tetris');
// context is set to 2d in order to allow us to draw on the canvas using 2d graphics.
const context = canvas.getContext('2d');

// ROWS * COLUMNS defines a 20 by 10 grid which is standard for tetris.
const ROWS = 20;
const COLUMNS = 10;

/*
* In order for each block to fit evenly in the total width of the canvas, we must calculate the block size.
* formula for calculating block size is given below
* */
const BLOCK_SIZE = canvas.width / COLUMNS;

// Fills the entire canvas with black to create a black background
function drawBoard(){
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // populate the canvas with blocks, each block is gray
    for(let row = 0; row < ROWS; row++) {
        for(let col = 0; col < COLUMNS; col++) {
            context.strokeStyle = "gray";
            context.strokeRect(col * BLOCK_SIZE, row * BLOCK_SIZE, BLOCK_SIZE,BLOCK_SIZE)
        }
    }
}

// drawBoard();

const L_tetromino = [
    [0,0,1],
    [1,1,1],
    [0,0,0],
];

const tetromino = {
    shape: L_tetromino,
    row: 0, // start at the top
    col: 3, // start near the middle
};

function drawTetromino(){
    context.fillStyle = 'orange';
    for(let row = 0; row < tetromino.shape.length; row++){
        for(let col = 0; col < tetromino.shape[row].length; col++){
            context.fillRect(
                (tetromino.col+col)*BLOCK_SIZE,
                (tetromino.row + row) * BLOCK_SIZE;
            )
        }
    }
}