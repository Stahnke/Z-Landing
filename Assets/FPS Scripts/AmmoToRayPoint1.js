var RayPoint1 : GameObject;
var MachineGunClips : int;
var HoldCounter : int = 0;


function ApplyNewMachineGunClips(NewMachineGunClips : int){

	MachineGunClips = NewMachineGunClips;

	if(RayPoint1.active == true)
	{
		gameObject.Find("RayPoint1").SendMessageUpwards("ApplyMachineGunClips", MachineGunClips, SendMessageOptions.DontRequireReceiver);
	}
	
	if(RayPoint1.active == false)
	{
		HoldCounter += NewMachineGunClips;
	}

}

function Update(){

	if(RayPoint1.active == true && HoldCounter > 0)
	{
		MachineGunClips = 0;
		MachineGunClips += HoldCounter;
		gameObject.Find("RayPoint1").SendMessageUpwards("ApplyMachineGunClips", MachineGunClips, SendMessageOptions.DontRequireReceiver);
		ResetHoldCounter();
	}


}

function ResetHoldCounter(){

	HoldCounter = 0;

}