var Mana : int;
var MaxMana : int;
var StartingMana : int = 200;
var StartingManaRegen : int = 1;
var ManaRegen : int;
var RegenCounter : int = 0;
var CombatCounter : int = 0;

var ManaText: GameObject;

var ArchitectBuild : GameObject;

function Start(){

	MaxMana = StartingMana;
	Mana = MaxMana;
}

function Update(){
	
	if(Mana > 0 && RegenCounter == 0 && CombatCounter == 0)
	{
		Regenerate();
	}

	if(Mana < 0)
	{
		ZeroMana();
	}
	
	if(Mana > MaxMana)
	{
		MaxOut();
	}
	
	ManaText.guiText.text = "Mana: " + Mana + "/" + MaxMana;
	
	ArchitectBuild.SendMessageUpwards("CheckMana", Mana, SendMessageOptions.DontRequireReceiver);

}

function ZeroMana(){

	Mana = 0;

}

function MaxOut(){

	Mana = MaxMana;

}

function Regenerate(){

	RegenCounter += 1;
	Mana += ManaRegen;
	yield WaitForSeconds(1);
	RegenCounter -= 1;
	
}

function ApplyManaLoss1(ManaLossTurret1){

	Mana -= ManaLossTurret1;
}

function ApplyManaLoss2(ManaLossTurret2){
	
	Mana -= ManaLossTurret2;
}

function ApplyManaLoss3(ManaLossTurret3){

	Mana -= ManaLossTurret3;
}

function ApplyManaGain(ManaGain : int){

	Mana += ManaGain;

}

function ApplyMaxManaPlus(ManaPlus : int){

	MaxMana = StartingMana;
	MaxMana += ManaPlus;

}

function ApplyManaRegenPlus(ManaRegenPlus : int){

	ManaRegen = StartingManaRegen;
	ManaRegen += ManaRegenPlus;


}
