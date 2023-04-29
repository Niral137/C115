crownX=0;
crownY=0;

function preload(){
    crown= loadImage('https://png.pngtree.com/png-clipart/20200218/ourmid/pngtree-yellow-crown-king-crown-png-image_5323922.png');

}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        crownX= results[0].pose.crown.x-15;
        crownY = results[0].pose.crown.y-15;
    }
}

function draw(){
    image(video, 0, 0 ,300,300);
    image(crown, crownX,crownY, 30,30);

}

function take_snapshot(){
    save('myFilterImage.png')
}