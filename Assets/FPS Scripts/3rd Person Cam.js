
var On : float = -1;
var Cam : GameObject;

function Update () {

	if(Input.GetMouseButtonDown(2))
	{
		On *= -1;
	}
	
	if(On == 1)
	{
		Cam.active = true;
	}
	if(On == -1 )
	{
		Cam.active = false;
	}
			
}
	