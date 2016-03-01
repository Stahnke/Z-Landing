var Level : int;
var Exp : int;
var Lv1Exp : int = 100;
var Lv2Exp : int = 150;
var Lv3Exp : int = 220;
var Lv4Exp : int = 310;
var Lv5Exp : int = 430;
var Lv6Exp : int = 580;
var Lv7Exp : int = 750;
var Lv8Exp : int = 960;
var Lv9Exp : int = 1190;
var Lv10Exp : int = 1440;

var Lv1Text : GameObject;
var Lv2Text : GameObject;
var Lv3Text : GameObject;
var Lv4Text : GameObject;
var Lv5Text : GameObject;
var Lv6Text : GameObject;
var Lv7Text : GameObject;
var Lv8Text : GameObject;
var Lv9Text : GameObject;
var Lv10Text : GameObject;
var Lv11Text : GameObject;


var AddDamage : int;
var AddHealth : int;
var AddMana : int;

var Character1 : GameObject;


function Start () {

	Lv1Text.active = true;
	AddDamage = 0;
	Level = 1;
	Exp = 0;
	

}


function Update () {

	if(Level == 1)
	{
		if(Exp == 100 || Exp > 100)
		{
			AddDamage = 1;
			AddHealth = 25;
			AddMana = 10;
			LevelUp();
			Exp -= Lv1Exp;
			Lv1Text.active = false;
			Lv2Text.active = true;
		}
	}
	
	if(Level == 2)
	{
		if(Exp == 150 || Exp > 150)
		{
			AddDamage = 2;
			AddHealth = 30;
			AddMana = 12;
			LevelUp();
			Exp -= Lv2Exp;
			Lv2Text.active = false;
			Lv3Text.active = true;
		}
	}
	
	if(Level == 3)
	{
		if(Exp == 220 || Exp > 220)
		{
			AddDamage = 2;
			AddHealth = 30;
			AddMana = 12;
			LevelUp();
			Exp -= Lv3Exp;
			Lv3Text.active = false;
			Lv4Text.active = true;
		}
	}
	
	if(Level == 4)
	{
		if(Exp == 310 || Exp > 310)
		{
			AddDamage = 3;
			AddHealth = 35;
			AddMana = 14;
			LevelUp();
			Exp -= Lv4Exp;
			Lv4Text.active = false;
			Lv5Text.active = true;
		}
	}
	
	if(Level == 5)
	{
		if(Exp == 430 || Exp > 430)
		{
			AddDamage = 3;
			AddHealth = 35;
			AddMana = 14;
			LevelUp();
			Exp -= Lv5Exp;
			Lv5Text.active = false;
			Lv6Text.active = true;
		}
	}
	
	if(Level == 6)
	{
		if(Exp == 580 || Exp > 580)
		{
			AddDamage = 4;
			AddHealth = 40;
			AddMana = 16;
			LevelUp();
			Exp -= Lv6Exp;
			Lv6Text.active = false;
			Lv7Text.active = true;
		}
	}
	
	if(Level == 7)
	{
		if(Exp == 750 || Exp > 750)
		{
			AddDamage = 4;
			AddHealth = 40;
			Addmana = 16;
			LevelUp();
			Exp -= Lv7Exp;
			Lv7Text.active = false;
			Lv8Text.active = true;
		}
	}
	
	if(Level == 8)
	{
		if(Exp == 960 || Exp > 960)
		{
			AddDamage = 5;
			AddHealth = 45;
			AddMana = 18;
			LevelUp();
			Exp -= Lv8Exp;
			Lv8Text.active = false;
			Lv9Text.active = true;
		}
	}
	
	if(Level == 9)
	{
		if(Exp == 1190 || Exp > 1190)
		{
			AddDamage = 5;
			AddHealth = 45;
			AddMana = 18;
			LevelUp();
			Exp -= Lv9Exp;
			Lv9Text.active = false;
			Lv10Text.active = true;
		}
	}
	
	if(Level == 10)
	{
		if(Exp == 1440 || Exp > 1440)
		{
			AddDamage = 5;
			AddHealth = 45;
			AddMana = 18;
			LevelUp();
			Exp -= Lv10Exp;
			Lv10Text.active = false;
			Lv11Text.active = true;
		}
	}

}

function LevelUp() {

	Level += 1;
	Character1.SendMessageUpwards("AddDamagePlus", AddDamage, SendMessageOptions.DontRequireReceiver);
	Character1.SendMessageUpwards("AddHealthPlus", AddHealth, SendMessageOptions.DontRequireReceiver);
	Character1.SendMessageUpwards("AddManaPlus", AddMana, SendMessageOptions.DontRequireReceiver);
}

function ApplyExpGain(ExpGain : int) {

	Exp += ExpGain;

}