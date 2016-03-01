var Wave1 : GameObject;
var Wave2 : GameObject;
var Wave3 : GameObject;

var WaveWaitTime : float = 5;
var ZombieSpawnTime : float = 10;

var WaveNumber : float = 1;
var Counter: Transform;

var SpawnPoint1 : Transform;
var SpawnPoint2 : Transform;
var SpawnPoint3 : Transform;
var SpawnPoint4 : Transform;
var SpawnPoint5 : Transform;

var ZombiePrefab1 : GameObject;
var ZombiePrefab2 : GameObject;
var ZombiePrefab3 : GameObject;

var Respawner : boolean = true;

var Character1 : GameObject;



//Start ZombieTotal
function Start()
{
	Counter.transform.position.x = 25;
}


function WaveAdd()
{
	WaveNumber+= 0.5;
}

//Refills ZombieTotal
function Reset1()
{
	Counter.transform.position.x = 30;
}
function Reset2()
{
	Counter.transform.position.x = 35;
}
function Reset3()
{
	Counter.transform.position.x = 40;
}

//If ZombieTotal == 0, then Start next wave
function Update () {

	if(Counter.transform.position.x == 0 && WaveNumber == 1.5)
	{
		WaveAdd();
		Reset1();
	}
	if(Counter.transform.position.x == 0 && WaveNumber == 2.5)
	{
		WaveAdd();
		Reset2();
	}
	if(Counter.transform.position.x == 0 && WaveNumber == 3.5)
	{
		WaveAdd();
		Reset3();
	}
	
	
//Waves		
	if(WaveNumber == 1)
	{
		Activate1();
	}
	if(WaveNumber == 2)
	{
		Activate2();
	}
	if(WaveNumber == 3)
	{
		Activate3();
	}
	
}

//Spawns
function Spawn1() {

 	var go1 : GameObject = Spawner.Spawn (ZombiePrefab1, SpawnPoint1.position, SpawnPoint1.rotation) as GameObject;
	var go2 : GameObject = Spawner.Spawn (ZombiePrefab1, SpawnPoint2.position, SpawnPoint2.rotation) as GameObject;
	var go3 : GameObject = Spawner.Spawn (ZombiePrefab1, SpawnPoint3.position, SpawnPoint3.rotation) as GameObject;
	var go4 : GameObject = Spawner.Spawn (ZombiePrefab1, SpawnPoint4.position, SpawnPoint4.rotation) as GameObject;
	var go5 : GameObject = Spawner.Spawn (ZombiePrefab1, SpawnPoint5.position, SpawnPoint5.rotation) as GameObject;
	
}

//Wave Actions
function Activate1() {


	WaveNumber += 0.5;
	yield WaitForSeconds(WaveWaitTime);

	Wave1.active = true;
	
	yield WaitForSeconds(WaveWaitTime);
	
	
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	
}
function Activate2(){

	WaveNumber += 0.5;
	
	Character1.SendMessageUpwards("Respawn", Respawner, SendMessageOptions.DontRequireReceiver);
	
	yield WaitForSeconds(WaveWaitTime);
	
	Wave1.active = false;
	Wave2.active = true;
	
	yield WaitForSeconds(WaveWaitTime);
	
	
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	
}
function Activate3(){

	WaveNumber += 0.5;
	
	Character1.SendMessageUpwards("Respawn", Respawner, SendMessageOptions.DontRequireReceiver);
	
	yield WaitForSeconds(WaveWaitTime);

	Wave2.active = false;
	Wave3.active = true;
	
	yield WaitForSeconds(WaveWaitTime);
	
	
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();
	yield WaitForSeconds(ZombieSpawnTime);
	Spawn1();

}

