//
// variables
//

// size of square tiles in pixels
const SQUARE_SIZE = 25;

// Informations about the game status
const game = {
    status: "playing",
    score: 0,
    speed: 100
}
const board ={
    length: 20,
    width:20,
    colour:"red"
}
const snake = {
    xcordinate: board.width/2,
    ycordinate: board.length/2,
    direction: RIGHT,
    body: [{x:board.width/2,y:board.length/2},{x:board.width/2-1,y:board.length/2},{x:board.width/2-2,y:board.length/2}],
    colour:"yellow",
    length:3,
    haseaten: false

    
}
const apple = {
    colour: "purple",
    xcordinate: getRandomNumber(0,board.length-1),
    ycordinate: getRandomNumber(0,board.width-1)
}
//
// Functions
//

function moveSnake()
{
    if(snake.direction===UP)
    {
        snake.ycordinate = snake.ycordinate - 1
        if (snake.ycordinate<0){
            snake.ycordinate=board.length
        }

    }
    if(snake.direction===DOWN)
    {
        snake.ycordinate = snake.ycordinate + 1
        if (snake.ycordinate>board.length){
            snake.ycordinate=0
        }


    }
    if(snake.direction===RIGHT)
    {
        snake.xcordinate = snake.xcordinate + 1
        if (snake.xcordinate>board.width){
            snake.xcordinate=0
        }


    }
    if(snake.direction===LEFT)
    {
        snake.xcordinate = snake.xcordinate - 1
        if (snake.xcordinate<0){
            snake.xcordinate=board.width
        }


    }
}

function loop() {
if(game.status==="playing"){    
moveSnake()
if (snake.ycordinate === apple.ycordinate && snake.xcordinate === apple.xcordinate)
{snake.haseaten=true
snake.length+=1
apple.xcordinate= getRandomNumber(0,board.width-1),
apple.ycordinate= getRandomNumber(0,board.length-1)
game.score+=1000
}
snakeBodyMovement(snake.body,snake.length, {x:snake.xcordinate,y:snake.ycordinate}, snake.haseaten)
{snake.haseaten=false}
}
}


function draw() { 
    drawBoard(board.length, board.width, board.colour),
    drawSquare(snake.xcordinate,snake.ycordinate,"green"),
    drawSnakeBody(snake.body,snake.colour,snake.length)
    drawSquare(apple.xcordinate,apple.ycordinate,apple.colour)
    drawScore(game.score)


}

function onKeyDown(keyCode) {
    console.log(keyCode)
    if (keyCode=== "ArrowUp" && snake.direction != DOWN)
    {
        snake.direction=UP

    }
    if (keyCode=== "ArrowDown" && snake.direction != UP)
    {
        snake.direction=DOWN
    }
    if (keyCode=== "ArrowRight" && snake.direction != LEFT)
    {
        snake.direction=RIGHT
    }
    if (keyCode=== "ArrowLeft" && snake.direction != RIGHT)
    {
        snake.direction=LEFT
    }
console.log(snake.direction)
}
