
	public var FOVIN : float = 35;
	public var FOVSpeed: float = 5;
	public var Aim : boolean = false;
	public var DeffFOV: float;
	public var Cam: GameObject;
	var X : float;
	var Y: float;
	var MaxX : float = 0;
	var MaxY: float = -0.2;
	var Gun1 : GameObject;
	var Gun2 : GameObject;
	var Gun3 : GameObject;
	var Rayshoot2: GameObject;
	var BulletSpawn1: GameObject;
	var BulletSpawn2: GameObject;
	var On : float = -1;

	
function Start (){

	DeffFOV = Cam.camera.fieldOfView;
	X = Gun1.transform.localPosition.x;
	Y = Gun1.transform.localPosition.y;

}

function Update () {

	// Turn on/off Gun2
	if(Input.GetButtonDown("X") && Aim == false && Gun2.transform.localRotation.y == 0)
	{
	On *= -1;

	}
	
	if(On == -1 && Gun1.active == true )
	{
	
	Rayshoot2.active = true;
	Gun2.active = true;
	}
	
	if(On == 1 )
	{
	
	Rayshoot2.active = false;
	Gun2.active = false;
	}
	
	// Check to see if Gun2 is active, if so, turn off FOV Zoom
	if(Gun1.active == true && Gun2.active == true)
	{
	FOVSpeed = 0;
	} 
	if(Gun2.active == false)
	{
	FOVSpeed = 5;
	}
	
	//FOV Script
	if(Input.GetMouseButtonDown(1))
	{
		Aim = true;
	}
	
	if(Input.GetMouseButtonUp(1))
	{
		Aim = false;
	}
	
	if(Gun1.active == true)
	{
		if(Aim)
		{
			Cam.camera.fieldOfView = Mathf.Lerp(Cam.camera.fieldOfView, FOVIN, FOVSpeed * Time.deltaTime);
			Gun1.transform.localPosition.x = Mathf.Lerp(Gun1.transform.localPosition.x, MaxX, FOVSpeed *Time.deltaTime);
			Gun1.transform.localPosition.y = Mathf.Lerp(Gun1.transform.localPosition.y, MaxY, FOVSpeed *Time.deltaTime);
		}
	
		if(!Aim)
		{
			Cam.camera.fieldOfView = Mathf.Lerp(Cam.camera.fieldOfView, DeffFOV, FOVSpeed * Time.deltaTime);
			Gun1.transform.localPosition.x = Mathf.Lerp(Gun1.transform.localPosition.x, X, FOVSpeed *Time.deltaTime);
			Gun1.transform.localPosition.y = Mathf.Lerp(Gun1.transform.localPosition.y, Y, FOVSpeed *Time.deltaTime);
		}
	}
	
	if(Gun3.active == true)
	{
		if(Aim)
		{
			Cam.camera.fieldOfView = Mathf.Lerp(Cam.camera.fieldOfView, FOVIN, FOVSpeed * Time.deltaTime);
			Gun3.transform.localPosition.x = Mathf.Lerp(Gun3.transform.localPosition.x, MaxX, FOVSpeed *Time.deltaTime);
			Gun3.transform.localPosition.y = Mathf.Lerp(Gun3.transform.localPosition.y, MaxY, FOVSpeed *Time.deltaTime);
		}
	
		if(!Aim)
		{
			Cam.camera.fieldOfView = Mathf.Lerp(Cam.camera.fieldOfView, DeffFOV, FOVSpeed * Time.deltaTime);
			Gun3.transform.localPosition.x = Mathf.Lerp(Gun3.transform.localPosition.x, X, FOVSpeed *Time.deltaTime);
			Gun3.transform.localPosition.y = Mathf.Lerp(Gun3.transform.localPosition.y, Y, FOVSpeed *Time.deltaTime);
		}
	}


}