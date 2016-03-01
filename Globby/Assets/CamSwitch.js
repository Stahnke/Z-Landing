var CamFollow : GameObject;
var CamFull : GameObject;

var x : int = 1;

function Start () {

	CamFull.active = true;

}

function Update () {

	if (Input.GetButtonDown("Tab"))
	{
		x *= -1;
	}
	
	if(x == -1)
	{
		CamFull.active = false;
		CamFollow.active = true;
	}
	
	if(x == 1)
	{
		CamFull.active = true;
		CamFollow.active = false;
	}

}