var RayPoint3 : GameObject;
var MachineGunClips : int;
var HoldCounter : int = 0;


function ApplyNewMachineGunClips(NewMachineGunClips : int){

	MachineGunClips = NewMachineGunClips;

	if(RayPoint3.active == true)
	{
		gameObject.Find("RayPoint3").SendMessageUpwards("ApplyMachineGunClips", MachineGunClips, SendMessageOptions.DontRequireReceiver);
	}
	
	if(RayPoint3.active == false)
	{
		HoldCounter += NewMachineGunClips;
	}

}

function Update(){

	if(RayPoint3.active == true && HoldCounter > 0)
	{
		MachineGunClips = 0;
		MachineGunClips += HoldCounter;
		gameObject.Find("RayPoint3").SendMessageUpwards("ApplyMachineGunClips", MachineGunClips, SendMessageOptions.DontRequireReceiver);
		ResetHoldCounter();
	}


}

function ResetHoldCounter(){

	HoldCounter = 0;

}