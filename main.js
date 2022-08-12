leftWristScore = 0;
rightWristScore = 0;
EmptyStringValue = "";
EmptyStringValue2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
accelerant = 0;
edd = 0;
function preload()
{
    accelerant = loadSound("accelerant.mp3");
    edd = loadSound("edd.webm")
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);

    EmptyStringValue = accelerant.isPlaying();
    EmptyStringValue2 = edd.isPlaying();

    if(scoreLeftWrist > 0.2)
        {
            fill("#00FFFF");
            stroke("#00FFFF");
            circle(leftWristX,leftWristY,20);
            edd.stop();
            if(EmptyStringValue = "false")
            {
                accelerant.play();
                document.getElementById("update").innerHTML = "Accelerant hank";
            }
        }
        if(rightLeftWrist > 0.2)
        {
            fill("#00FFFF");
            stroke("#00FFFF");
            circle(rightWristX,rightWristY,20);
            accelerant.stop();
            if(EmptyStringValue = "false")
            {
                edd.play();
                document.getElementById("update").innerHTML = "Challenge-EDD";
            }
        }
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristScore = results[0].pose.keypoints[9].score;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left Wrist X = " + leftWristX+" left Wrist Y = "+ leftWristX);

        rightWristScore = results[0].pose.keypoints[9].score;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right Wrist X = " + rightWristX+" right Wrist Y = "+ rightWristX);
    }
}

function playDefaultSong()
{
    accelerant.play();
}