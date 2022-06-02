

var canvas = new fabric.Canvas('MyCanvas')
var blw = 40;
var blh = 40;
var player_x= 100;
var player_y = 100;
var player_object = "";

function player_update(){
    fabric.Image.fromURL("Pose-Thor-PNG.png",function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    blo = Img;
    
    blo.scaleToWidth(blw);
    blo.scaleToHeight(blh);
    blo.set({
        top:player_y,
        left:player_x
    });
    canvas.add(blo);
    });
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
        blh = blh + 10;
        blw = blw + 10;
        document.getElementById("cw").innerHTML = blw;
        document.getElementById("ch").innerHTML = blh;
    }
    if (e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift pressed together");
        blh = blh - 10;
        blw = blw - 10;
        document.getElementById("cw").innerHTML = blw;
        document.getElementById("ch").innerHTML = blh;
    }



    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}

function up(){
    if(player_y >= 0){
        player_y = player_y - blh;
        console.log("block image hieght" + blh);
        console.log("when up arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <= 600){
        player_y = player_y + blh;
        console.log("block image hieght" + blh);
        console.log("when down arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >= 0){
        player_x = player_x - blh;
        console.log("block image hieght" + blh);
        console.log("when left arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <= 1000){
        player_x = player_x + blh;
        console.log("block image hieght" + blh);
        console.log("when up arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}