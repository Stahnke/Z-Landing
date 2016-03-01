var Missle : GameObject;
var SpawnPoint : Transform;
var DeathCam : GameObject;

function Start () {

}

function Update () {

	if(Input.GetButtonDown("Space") && DeathCam.active == true)
	{
		var go : GameObject = Spawner.Spawn(Missle, SpawnPoint.position, SpawnPoint.rotation);
		DeathCamInactive();
	}
	
}

function DeathCamInactive(){

	DeathCam.active = false;

}