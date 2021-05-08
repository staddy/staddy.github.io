// fpsmeter
var fpsmeter = new FPSMeter({ decimals: 0, graph: true, theme: 'dark', left: '5px' });
fpsmeter.hide();

// pixel scaling
PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST;

var WIDTH = 800, HEIGHT = 600;
var SCALE = 2;

// renderer
var renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT, {/*backgroundColor : 0x1099bb*/});
document.body.appendChild(renderer.view);

// load textures and run setup()
PIXI.loader.add('images/fixedsys.xml?v=0').load(setup);

// root of the scene graph
var stage;

// game scenes
var gameScene;

// current game state
var state;

var level;
var ball;

var ballTexture;
var blockTexture;
var testTexture;
var aimTexture;

var Directions = {None: 0, Up: 1, Right: 2, Down: 3, Left: 4};
var SIZE = 30;
var BLOCK = 20;

var wins = 0;
var losses = 0;

var turns = 0.5;
var pathLength = 0.5;
var blocks = 0.5;

var showTrace = false;
var trace = [];

var currentX;
var currentY;
var startX;
var startY;
var aimX;
var aimY;
var aimDirection;
var lastDirection;

function getBlock(x, y) {
    if(inBounds(x, y))
        return level[x][y];
    else
        return -1;
}

function oppositeDirection(direction) {
    switch (direction) {
        case Directions.Up:
            return Directions.Down;
        case Directions.Down:
            return Directions.Up;
        case Directions.Left:
            return Directions.Right;
        case Directions.Right:
            return Directions.Left;
    }
    return Directions.None;
}

function isGoodDirection(direction) {
    switch (direction) {
        case Directions.Up:
            if(getBlock(currentX, currentY - 1) == 0 && (getBlock(currentX, currentY - 2) == 0)) {
                return true;
            }
            break;
        case Directions.Down:
            if((getBlock(currentX, currentY + 1) == 0) && (getBlock(currentX, currentY + 2) == 0)) {
                return true;
            }
            break;
        case Directions.Left:
            if((getBlock(currentX - 1, currentY) == 0) && (getBlock(currentX - 2, currentY) == 0)) {
                return true;
            }
            break;
        case Directions.Right:
            if((getBlock(currentX + 1, currentY) == 0) && (getBlock(currentX + 2, currentY) == 0)) {
                return true;
            }
            break;
    }
    return false;
}

function blockDirection(direction) {
    switch (direction) {
        case Directions.Up:
            level[currentX][currentY - 1] = 1;
            break;
        case Directions.Down:
            level[currentX][currentY + 1] = 1;
            break;
        case Directions.Left:
            level[currentX - 1][currentY] = 1;
            break;
        case Directions.Right:
            level[currentX + 1][currentY] = 1;
            break;
    }
}

function randomDirection() {
    return Math.floor(Math.random() * 4) + 1;
}

function fillDirection(direction) {
    var shouldStop = true;
    level[currentX][currentY] = 2;
    if (isGoodDirection(direction)) {
        switch (direction) {
            case Directions.Up:
                --currentY;
                break;
            case Directions.Down:
                ++currentY;
                break;
            case Directions.Left:
                --currentX;
                break;
            case Directions.Right:
                ++currentX;
                break;
        }
        lastDirection = direction;
        shouldStop = false;
    }
    if(!shouldStop)
        if (Math.random() < pathLength)
            fillDirection(direction);
}

var winsText;
var lossesText;

function setup() {
    stage = new PIXI.Container();
    INPUT.initMouseEvents(stage);

    var graphics = new PIXI.Graphics();
    graphics.lineStyle(0);
    graphics.beginFill(0xFFFF0B, 1.0);
    graphics.drawCircle(0, 0, BLOCK / 2);
    graphics.endFill();
    ballTexture = graphics.generateTexture();

    graphics = new PIXI.Graphics();
    graphics.lineStyle(0);
    //graphics.lineStyle(2, 0x0000FF, 1);
    graphics.beginFill(0x0B990B, 1);
    graphics.drawRect(0, 0, BLOCK, BLOCK);
    blockTexture = graphics.generateTexture();

    aimTexture = PIXI.Texture.fromImage("images/arrow.png?v=0");

    graphics = new PIXI.Graphics();
    graphics.lineStyle(0);
    //graphics.lineStyle(2, 0x0000FF, 1);
    graphics.beginFill(0x0070FF, 1);
    graphics.drawRect(0, 0, BLOCK, BLOCK);
    testTexture = graphics.generateTexture();

    winsText = new PIXI.Text('Level: 0', { font: '30px Arvo', fill: '#FF1707', align: 'center' });
    winsText.position.x = 700;
    winsText.position.y = 40;
    winsText.anchor.x = 0.5;

    lossesText = new PIXI.Text('Losses: 0', { font: '30px Arvo', fill: '#FF1707', align: 'center' });
    lossesText.position.x = 700;
    lossesText.position.y = 80;
    lossesText.anchor.x = 0.5;

    var hintText = new PIXI.Text('\'R\' to restart;\narrow keys\nto move the ball', { font: '30px Arvo', fill: '#FF1707', align: 'center' });
    hintText.position.x = 700;
    hintText.position.y = 120;
    hintText.anchor.x = 0.5;

    stage.addChild(winsText);
    stage.addChild(lossesText);
    stage.addChild(hintText);

    //
    resetLevel();

    state = play;

    // start fps-meter
    fpsmeter.tickStart();

    // start the game loop
    gameLoop();
}

function gameLoop() {
    fpsmeter.tick();
    requestAnimationFrame(gameLoop);

    // update
    state();

    // render the root container
    renderer.render(stage);
}

function inBounds(x, y) {
    if(x >= 0 && x < SIZE && y >= 0 && y < SIZE)
        return true;
    return false
}

function resetLevel() {
    trace = [];
    INPUT.releaseAllKeys();
    stage.removeChild(gameScene);
    gameScene = new PIXI.Container();
    stage.addChild(gameScene);

    ball = new PIXI.Sprite(ballTexture);
    ball.ballDirection = Directions.None;

    level = [];
    for(var i = 0; i < SIZE; ++i) {
        level[i] = new Array(SIZE);
        for (var j = 0; j < SIZE; ++j) {
            level[i][j] = 0;
        }
    }
    currentX = Math.floor(Math.random() * (SIZE - 3)) + 2;
    currentY = Math.floor(Math.random() * (SIZE - 3)) + 2;

    ball.levelX = currentX;
    ball.levelY = currentY;
    startX = currentX;
    startY = currentY;

    var d;
    while(true) {
        d = randomDirection();
        if(isGoodDirection(d)) {
            pathLength = 0.5 + 0.5 * Math.random();
            fillDirection(d);
            blockDirection(d);
        }
        if(Math.random() > turns)
            break;
    }
    aimX = currentX;
    aimY = currentY;
    aimDirection = lastDirection;
    level[aimX][aimY] = 3;

    while(true) {
        var bx = Math.floor(Math.random() * SIZE);
        var by = Math.floor(Math.random() * SIZE);
        if(level[bx][by] == 0)
            level[bx][by] = 1;
        if(Math.random() > blocks)
            break;
    }

    for(var i = 0; i < level.length; ++i)
        for(var j = 0; j < level[i].length; ++j) {
            if(level[i][j] == 1) {
                var s = new PIXI.Sprite(blockTexture);
                gameScene.addChild(s);
                s.x = i * BLOCK;
                s.y = j * BLOCK;
            } else if (level[i][j] == 2) {
                var s = new PIXI.Sprite(testTexture);
                gameScene.addChild(s);
                s.x = i * BLOCK;
                s.y = j * BLOCK;
                s.visible = showTrace;
                trace.push(s);
            } else if (level[i][j] == 3) {
                var s = new PIXI.Sprite(aimTexture);
                s.anchor.set(0.5);
                s.scale.x = s.scale.y = 2;
                s.rotation = Math.PI / 2 * (aimDirection - 1);
                gameScene.addChild(s);
                s.x = i * BLOCK + BLOCK / 2;
                s.y = j * BLOCK + BLOCK / 2;
            }
        }

    gameScene.addChild(ball);
}

function play() {
    if (INPUT.down[KEYS.Z]) {
        showTrace = true;
        for(var i = 0; i < trace.length; ++i)
            trace[i].visible = true;
    }
    if (INPUT.down[KEYS.X]) {
        showTrace = false;
        for(var i = 0; i < trace.length; ++i)
            trace[i].visible = false;
    }
    if (INPUT.down[KEYS.R]) {
        //ball.visible = false;
        ball.ballDirection = Directions.None;
        lossesText.text = "Losses: " + ++losses;
        //resetLevel();
        ball.levelX = startX;
        ball.levelY = startY;
        INPUT.releaseAllKeys();
    }
    if (INPUT.down[KEYS.N]) {
        ball.visible = false;
        ball.ballDirection = Directions.None;
        resetLevel();
    }
    if (inBounds(ball.levelX, ball.levelY)) {
        if (ball.ballDirection == Directions.None) {
            if (INPUT.down[KEYS.UP])
                ball.ballDirection = Directions.Up;
            else if (INPUT.down[KEYS.DOWN])
                ball.ballDirection = Directions.Down
            else if (INPUT.down[KEYS.LEFT])
                ball.ballDirection = Directions.Left
            else if (INPUT.down[KEYS.RIGHT])
                ball.ballDirection = Directions.Right
        } else if (ball.ballDirection == Directions.Up) {
            if (ball.levelY > 0) {
                if (level[ball.levelX][ball.levelY - 1] != 1)
                    --ball.levelY;
                else
                    ball.ballDirection = Directions.None;
            } else {
                --ball.levelY;
            }

        } else if (ball.ballDirection == Directions.Down) {
            if (ball.levelY < (SIZE - 1)) {
                if (level[ball.levelX][ball.levelY + 1] != 1)
                    ++ball.levelY;
                else
                    ball.ballDirection = Directions.None;
            } else {
                ++ball.levelY;
            }
        } else if (ball.ballDirection == Directions.Left) {
            if (ball.levelX > 0) {
                if (level[ball.levelX - 1][ball.levelY] != 1)
                    --ball.levelX;
                else
                    ball.ballDirection = Directions.None;
            } else {
                --ball.levelX;
            }
        } else if (ball.ballDirection == Directions.Right) {
            if (ball.levelX < (SIZE - 1)) {
                if (level[ball.levelX + 1][ball.levelY] != 1)
                    ++ball.levelX;
                else
                    ball.ballDirection = Directions.None;
            } else {
                ++ball.levelX;
            }
        }
        ball.position.x = ball.levelX * BLOCK;
        ball.position.y = ball.levelY * BLOCK;
        if ((ball.levelX == aimX) && (ball.levelY == aimY) && (ball.ballDirection == aimDirection)) {
            ball.ballDirection = Directions.None;
            winsText.text = "Level: " + ++wins;
            if(turns < 0.999)
                turns = turns + (1 - turns) / 2;
            //if(pathLength < 0.999)
            //    pathLength = pathLength + (1 - pathLength) / 2;
            if(blocks < 0.995)
                blocks = blocks + (1 - blocks) / 2;
            resetLevel();
        }
    } else {
        //ball.visible = false;
        ball.ballDirection = Directions.None;
        lossesText.text = "Losses: " + ++losses;
        //resetLevel();
        ball.levelX = startX;
        ball.levelY = startY;
    }
}

function nothing() {}

function end() {

}