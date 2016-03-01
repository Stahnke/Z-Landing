
var AmmoGainGui : GameObject;
var SpawnPoint : Transform;
var NewMachineGunClips : int = 6;

function Start () {

gameObject.animation.Play("Box Rotate");

}

function OnTriggerEnter(col : Collider ) {

	if(col.tag == "Player")
	{
	
	var go : GameObject = Spawner.Spawn(AmmoGainGui, SpawnPoint.position, SpawnPoint.rotation) as GameObject;
	
	gameObject.Find("RayPointHolder3").SendMessageUpwards("ApplyNewMachineGunClips", NewMachineGunClips, SendMessageOptions.DontRequireReceiver);
	Destroy(gameObject);
	
	}
}

