
var WaitTime : int = 5;
var Moon : GameObject;
var SecretBossText : GameObject;
var SecretBossPrefab1 : GameObject;
var SecretBossSpawn1 : Transform;
var BossNumber : int;

function Start(){
	
	BossNumber = 1;

}

function Update () {

	if(Moon.transform.position.x > -300 && Moon.transform.position.x < -295 && BossNumber == 1)
	{
		Activate1();
		
	}

}

function Activate1(){

	BossNumber += 1;
	SecretBossText.active = true;
	yield WaitForSeconds(WaitTime);
	SecretBossText.active = false;
	var go1 : GameObject = Spawner.Spawn (SecretBossPrefab1, SecretBossSpawn1.position, SecretBossSpawn1.rotation) as GameObject;

}