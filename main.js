img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;




function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario05.png");
}

function setup() {
	canvas = createCanvas(1240,400);
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(700,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
	background("#D3D3D3");
	if(noseX < 300)
		{
			marioX = marioX - 1;
		}
	if(noseX > 300)
		{
			marioX = marioX + 1;
		}
	if(noseY < 150)
		{
			marioY = marioY - 1;
		}
			
	image(img,mariox, marioY, 40,70);
}

function modelLoaded()
{
	console.log('Model Loaded!');
}

function gotPoses(results)
{
	if(results.length > 0)
		{
			console.log(results);
			noseX = results[0].pose.nose.x;
			noseY = results[0].pose.nose.y;
			console.log("noseX = " + noseX +", noseY = " + noseY);
		}
}

noseX = "";
noseY = "";
GameStatus = "";

function  game()
{
	instializingInDraw();
	moveEnviornment(mario);
	drawSprites();
	console.log("noseX = " + noseX +", noseY = " + noseY);
}

function startGame()
{
	GameStatus = "start";
	document.getElementById("status").innerHTML = "Game is Loading";
}



