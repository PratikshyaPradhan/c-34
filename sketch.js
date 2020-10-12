var ball;
var position;
var database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database= firebase.database();
    var ballRef= database.ref('ball/position');
    ballRef.on('value',readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
position= data.val();
ball.x = position.x;
ball.y = position.y;
}

function showError(){
    console.log("1234");
}

function writePosition(x,y){
var options = {
 
'x': position.x+x,
'y': position.y+y


}
database.ref('ball/position').set(options);
}
