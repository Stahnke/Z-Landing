var Health: int;
var DeathCam : GameObject;
var HealthText : GameObject;
var MaxHealth : int;
var StartingHealth : int = 200;;
var CombatCounter = 0;
var ZombiePrefab : GameObject;

function Start(){

MaxHealth = StartingHealth;
Health = MaxHealth;


}


function Update () {

	if(Health < 0)
	{
		ZeroHealth();
	}
	
	if(Health == 0)
	{

		DeathCam.active = true;
		//gameObject = false;
	}
	
	if(Health > MaxHealth)
	{
		MaxOut();
	}
	
	HealthText.guiText.text = "Ship Health: " + Health + "/" + MaxHealth;

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


function ApplyMaxHealthPlus(HealthPlus : int){

	MaxHealth = StartingHealth;
	MaxHealth += HealthPlus;

}


