var Health: int;
var MainCamera : GameObject;
var DeathCam : GameObject;
var HealthText : GameObject;
var MaxHealth : int;
var StartingHealth : int = 200;
var StartingHealthRegen : int = 1;
var HealthRegen : int;
var RegenCounter = 0;
var CombatCounter = 0;
var RespawnPoint1 : Transform;
var Character1Death : boolean = false;
var ZombiePrefab : GameObject;

function Start(){

MaxHealth = StartingHealth;
Health = MaxHealth;

HealthRegen = StartingHealthRegen;

}


function Update () {

	if(Health > 0 && RegenCounter == 0 && CombatCounter == 0)
	{
		Regenerate();
	}

	if(Health < 0)
	{
		ZeroHealth();
	}
	
	if(Health == 0)
	{
		ZombiePrefab.SendMessageUpwards("ResetCharacter1Agro", Character1Death, SendMessageOptions.DontRequireReceiver);
		MainCamera.active = false;
		DeathCam.active = true;
		//gameObject = false;
	}
	
	if(Health > MaxHealth)
	{
		MaxOut();
	}
	
	HealthText.guiText.text = "Health: " + Health + "/" + MaxHealth;

}

function ApplyZombieDamage(ZombieDamage : int){

	Health -= ZombieDamage;

}

function ZeroHealth(){

	Health = 0;

}

function MaxOut(){

	Health = MaxHealth;

}

function Regenerate(){

	RegenCounter += 1;
	Health += HealthRegen;
	yield WaitForSeconds(1);
	RegenCounter -= 1;
	

}

function ApplyMaxHealthPlus(HealthPlus : int){

	MaxHealth = StartingHealth;
	MaxHealth += HealthPlus;

}

function ApplyHealthRegenPlus(HealthRegenPlus : int){

	HealthRegen = StartingHealthRegen;
	HealthRegen += HealthRegenPlus;

}

function Respawn(Respawner : boolean){

	if(Health == 0)
	{
		gameObject.active = Respawner;
		gameObject.transform.position = RespawnPoint1.position;
		MaxOut();
	}


}


