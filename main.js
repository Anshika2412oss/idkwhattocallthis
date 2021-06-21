function setup(){
    canvas=createCanvas(630 , 480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide()
    filter_color="";
}

function draw(){
    image(video, 0 , 0 , 630 , 480);
    tint(filter_color);
}
function take_snapshot(){
    save('anshika.png');
}