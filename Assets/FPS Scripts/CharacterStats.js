var DamagePlus : int;
var HealthPlus : int;
var SpeedPlus : int;
var DefensePlus : int;
var ManaPlus : int;
var HealthRegenPlus : int;
var ManaRegenPlus : int;

var Counter : int;

var RayPoint1 : GameObject;
var RayPoint2 : GameObject;
var RayPoint3 : GameObject;

var Character1 : GameObject;

function Start () {

	Counter = 0;
	
	DamagePlus = 10;
	HealthPlus = 0;
	HealthRegenPlus = 0;
	ManaPlus = 0;
	ManaRegenPlus = 0;
	SpeedPlus = 0;
	DefensePlus = 0;
	

}

function AddDamagePlus(AddDamage : int){

	DamagePlus += AddDamage;
	
}

function AddManaPlus(AddMana : int){

	ManaPlus += AddMana;

}

function AddHealthPlus(AddHealth: int){

	HealthPlus += AddHealth;
}

function Update() {

		RayPoint1.SendMessageUpwards("ApplyDamagePlus", DamagePlus, SendMessageOptions.DontRequireReceiver);
		RayPoint2.SendMessageUpwards("ApplyDamagePlus", DamagePlus, SendMessageOptions.DontRequireReceiver);
		RayPoint3.SendMessageUpwards("ApplyDamagePlus", DamagePlus, SendMessageOptions.DontRequireReceiver);
		
		Character1.SendMessageUpwards("ApplyMaxManaPlus", ManaPlus, SendMessageOptions.DontRequireReceiver);
		Character1.SendMessageUpwards("ApplyManaRegenPlus", ManaRegenPlus, SendMessageOptions.DontRequireReceiver);
				
		Character1.SendMessageUpwards("ApplyMaxHealthPlus", HealthPlus, SendMessageOptions.DontRequireReceiver);
		Character1.SendMessageUpwards("ApplyHealthRegenPlus", HealthRegenPlus, SendMessageOptions.DontRequireReceiver);
		
}
