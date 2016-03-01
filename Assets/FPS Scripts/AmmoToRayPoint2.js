var RayPoint2 : GameObject;
var MachineGunClips : int;
var HoldCounter : int = 0;


function ApplyNewMachineGunClips(NewMachineGunClips : int){

	MachineGunClips = NewMachineGunClips;

	if(RayPoint2.active == true)
	{
		gameObject.Find("RayPoint2").SendMessageUpwards("ApplyMachineGunClips", MachineGunClips, SendMessageOptions.DontRequireReceiver);
	}
	
	if(RayPoint2.active == false)
	{
		HoldCounter += NewMachineGunClips;
	}

}

function Update(){

	if(RayPoint2.active == true && HoldCounter > 0)
	{
		MachineGunClips = 0;
		MachineGunClips += HoldCounter;
		gameObject.Find("RayPoint2").SendMessageUpwards("ApplyMachineGunClips", MachineGunClips, SendMessageOptions.DontRequireReceiver);
		ResetHoldCounter();
	}


}

function ResetHoldCounter(){

	HoldCounter = 0;

}