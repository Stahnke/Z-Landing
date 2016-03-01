
var On : float = -1;
var flashlight : GameObject;

function Update () {

	if(Input.GetButtonDown("f"))
	{
		On *= -1;
	}
	
	if(On == 1)
	{
		flashlight.active = true;
	}
	if(On == -1 )
	{
		flashlight.active = false;
	}
			
}
	
