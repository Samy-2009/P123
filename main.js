difference=0;
leftWristX=0;
rightWristX=0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(110)
    
    canvas = createCanvas(550, 482),
    canvas.position(670, 80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet se esta inicializando, yey si funciono esto, bueno lo siguiente a ver que tal =)')
}

function gotPoses(results){
    if(results.lenght>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+ leftWristX + "rightWristX = " + rightWristX + "difference " + difference);
    }
}

function draw(){
    background('#A1D2FE');

    textSize(difference);
    fill(yellow);
    text(Samuel, 10, 100)

}