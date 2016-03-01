
var MaxHealth : int = 1000;
var CurrentHealth : int;
var ExpGain : int = 500;

function Start() {

	CurrentHealth = MaxHealth;


}

function Update(){


	if(CurrentHealth < 0)
	{
		Zero();
	}
	
		if(CurrentHealth == 0)
	{	
		gameObject.Find("Character1").SendMessageUpwards("ApplyExpGain", ExpGain, SendMessageOptions.DontRequireReceiver);
		Destroy(gameObject);
	}
	
}

function Zero(){

	CurrentHealth = 0;
}

function ApplyDamage(Damage : float) {
	
	CurrentHealth -= Damage;

}