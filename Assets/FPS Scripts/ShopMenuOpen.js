var Shop : Transform;
var distance : float;
var AccessRange : int = 10; 
var ShopMenuObject : GameObject;
var ShopMenuText : GameObject;
var Counter : int;
var MainCamera : GameObject;
//var MouseLook : FPSMouselook;

function Start () {

	ShopMenuObject.active = false;
	ShopMenuText.active = false;
	Counter = -1;

}

function Update () {

 //MouseLook = MainCamera.GetComponent("FPS Mouselook");

	distance = Vector3.Distance(Shop.position, transform.position);
	
	if(distance < AccessRange)
	{
		if(Input.GetButtonDown("Action"))
		{
			Counter *= -1;
			
		}
		
		if(Counter == 1)
		{
			ShopMenuObject.active = true;
			ShopMenuText.active = true;
			
			//MouseLook.active = false;
		}
		if(Counter == -1)
		{
			ShopMenuObject.active = false;
			ShopMenuText.active = false;
			//MouseLook.active = true;
		}
	}
	
	if(distance > AccessRange)
	{
		ShopMenuObject.active = false;
		ShopMenuText.active = false;
		Counter = -1;
	}

}