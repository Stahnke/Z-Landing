var buttonwidth : int = 60;
var buttonheight : int = 50;
var spacing : int = 10;

var Turret1 : GameObject;
var TurretSpawnPoint : Transform;

var Turret1Counter : int = 0;
var Turret2Counter : int = 0;
var Turret3Counter : int = 0;

var Gun1 : GameObject;
var Gun2 : GameObject;
var RayPoint1 : GameObject;
var RayPoint2: GameObject;
var Lightmeter1 : GameObject;
var Lightmeter2 : GameObject;
var Ammo1Text : GameObject;
var Ammo2Text : GameObject;

var ManaLossTurret1 : int = 25;
var ManaLossTurret2 : int = 50;
var ManaLossTurret3 : int = 100;

var Character1 : GameObject;

var ManaRequire : int;

function OnGUI() {

	GUILayout.BeginArea(Rect(Screen.width - Screen.width/9 , Screen.height/2 - buttonheight, buttonwidth, buttonheight * 8));
		
		GUILayout.Button("1. Turret1", GUILayout.Height(buttonheight));
		
		GUILayout.Space(spacing);
		
		GUILayout.Button("2. Turret2", GUILayout.Height(buttonheight));
		
		GUILayout.Space(spacing);
		
		GUILayout.Button("3. Turret3", GUILayout.Height(buttonheight));
	
	GUILayout.EndArea();

}

function Update() {

	if(Input.GetButtonDown("1") && ManaRequire >= 25)
	{
		var go1 : GameObject = Spawner.Spawn(Turret1, TurretSpawnPoint.position, TurretSpawnPoint.rotation) as GameObject;
		Character1.SendMessageUpwards("ApplyManaLoss1", ManaLossTurret1, SendMessageOptions.DontRequireReceiver);
		
	}
	if(Input.GetButtonDown("2") && ManaRequire >= 50)
	{
		var go2 : GameObject = Spawner.Spawn(Turret1, TurretSpawnPoint.position, TurretSpawnPoint.rotation) as GameObject;
		Character1.SendMessageUpwards("ApplyManaLoss2", ManaLossTurret2, SendMessageOptions.DontRequireReceiver);
	}
	if(Input.GetButtonDown("3") && ManaRequire >= 100)
	{
		var go3 : GameObject = Spawner.Spawn(Turret1, TurretSpawnPoint.position, TurretSpawnPoint.rotation) as GameObject;
		Character1.SendMessageUpwards("ApplyManaLoss3", ManaLossTurret3, SendMessageOptions.DontRequireReceiver);
	}
	if(Input.GetButtonDown("Cancel"))
	{
		gameObject.active = false;
		
		Gun1.active = true;
		Lightmeter1.active = true;
		RayPoint1.active = true;
		Ammo1Text.active = true;
		
		Gun2.active = true;
		Lightmeter2.active = true;
		RayPoint2.active = true;
		Ammo2Text.active = true;
	}


}

function CheckMana(Mana : int){
	
	ManaRequire = Mana;


}
