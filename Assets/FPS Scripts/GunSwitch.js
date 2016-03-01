var Gun1 : GameObject;
var Gun2 : GameObject;
var Gun3 : GameObject;
var Gun4 : GameObject;
var Gun5: GameObject;
var RayPoint1 : GameObject;
var RayPoint2: GameObject;
var RayPoint3: GameObject;
var RayPoint5 : GameObject;
var Lightmeter1 : GameObject;
var Lightmeter2 : GameObject;
var Lightmeter3 : GameObject;
var Lightmeter5 : GameObject;
var Ammo1Text : GameObject;
var Ammo2Text : GameObject;
var Ammo3Text : GameObject;
var Ammo5Text : GameObject;

function Start(){
	
	Gun3.active = false;
	RayPoint3.active = false;
	Ammo3Text.active = false;
	
	Gun5.active = false;
	RayPoint5.active = false;
	Ammo5Text.active = false;

}

function Update () {

	if(Input.GetButtonDown("1") && Gun3.transform.localRotation.y == 0 && Gun4.active == false)
	{
		Gun1.active = true;
		Lightmeter1.active = true;
		RayPoint1.active = true;
		Ammo1Text.active = true;
		
		Gun2.active = true;
		Lightmeter2.active = true;
		RayPoint2.active = true;
		Ammo2Text.active = true;
		
		Gun3.active = false;
		Lightmeter3.active = false;
		RayPoint3.active = false;
		Ammo3Text.active = false;
		
		Gun4.active = false;
		
		Gun5.active = false;
		Lightmeter5.active = false;
		RayPoint5.active = false;
		Ammo5Text.active = false;
		
	}
	if(Input.GetButtonDown("2") && Gun1.transform.localRotation.y == 0 && Gun2.transform.localRotation.y == 0 && Gun4.active == false)
	{
		Gun3.active = true;
		Lightmeter3.active = true;
		RayPoint3.active = true;
		Ammo3Text.active = true;
		
		Gun1.active = false;
		Lightmeter1.active = false;
		RayPoint1.active = false;
		Ammo1Text.active = false;
		
		Gun2.active = false;
		Lightmeter2.active = false;
		RayPoint2.active = false;
		Ammo2Text.active = false;
		
		Gun4.active = false;
		
		Gun5.active = false;
		Lightmeter5.active = false;
		RayPoint5.active = false;
		Ammo5Text.active = false;
	}
	
	if(Input.GetButtonDown("3") && Gun1.transform.localRotation.y == 0 && Gun2.transform.localRotation.y == 0 && Gun3.transform.localRotation.y == 0)
	{
		Gun4.active = true;
		
		Gun1.active = false;
		Lightmeter1.active = false;
		RayPoint1.active = false;
		Ammo1Text.active = false;
		
		Gun2.active = false;
		Lightmeter2.active = false;
		RayPoint2.active = false;
		Ammo2Text.active = false;
		
		Gun3.active = false;
		Lightmeter3.active = false;
		RayPoint3.active = false;
		Ammo3Text.active = false;
		
		Gun5.active = false;
		Lightmeter5.active = false;
		RayPoint5.active = false;
		Ammo5Text.active = false;
	}
	
	if(Input.GetButtonDown("4") && Gun1.transform.localRotation.y == 0 && Gun2.transform.localRotation.y == 0 && Gun3.transform.localRotation.y == 0 && Gun4.transform.localRotation.y == 0)
	{
		Gun5.active = true;
		Lightmeter5.active = true;
		RayPoint5.active = true;
		Ammo5Text.active = true;
		
		Gun1.active = false;
		Lightmeter1.active = false;
		RayPoint1.active = false;
		Ammo1Text.active = false;
		
		Gun2.active = false;
		Lightmeter2.active = false;
		RayPoint2.active = false;
		Ammo2Text.active = false;
		
		Gun3.active = false;
		Lightmeter3.active = false;
		RayPoint3.active = false;
		Ammo3Text.active = false;
		
		Gun4.active = false;
	}
}
