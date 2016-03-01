
var MaxHealth : int = 100;
var CurrentHealth : int;
var Counter : Transform;
var ExpGain : int = 10;
var MoneyGain : int = 10;
var AmmoBoxMachineGun : GameObject;
var AmmoBoxMagnum : GameObject;
var RandomNoise : int;
var HitNoise1 : AudioClip;
var HitNoise2 : AudioClip;
var HitNoise3 : AudioClip;
var DeathNoise1: AudioClip;
var DeathNoise2: AudioClip;
var R1 : int = 1;
var R2 : int = 25;

var Character1AgroGain : float = 0;

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
		var RandomNumber = Random.Range(R1,R2);
		if(RandomNumber == 1 || RandomNumber == 2 || RandomNumber == 3)
		{
			var go1 : GameObject = Spawner.Spawn(AmmoBoxMachineGun, transform.position, transform.rotation) as GameObject;
		}
		if(RandomNumber == 4)
		{
			var go2 : GameObject = Spawner.Spawn(AmmoBoxMagnum, transform.position, transform.rotation) as GameObject;
		}
		Counter.transform.position.x -= 1;
		gameObject.Find("Character1").SendMessageUpwards("ApplyMoneyGain", MoneyGain, SendMessageOptions.DontRequireReceiver);
		gameObject.Find("Character1").SendMessageUpwards("ApplyExpGain", ExpGain, SendMessageOptions.DontRequireReceiver);
		//audio.PlayOneShot(DeathNoise1);
		Destroy(gameObject);
	}
	
}

function Zero()
{
	CurrentHealth = 0;
}

function ApplyDamage(Damage : float) {
	
	CurrentHealth -= Damage;
	
	/*RandomNoise = Random.Range(1,15);
	
	if(RandomNoise == 1 || RandomNoise == 2 || RandomNoise == 3)
	
	{
		audio.PlayOneShot(HitNoise1);
	}
	
	if(RandomNoise == 4 || RandomNoise == 5)
	{
		audio.PlayOneShot(HitNoise2);
	}
	
	if(RandomNoise == 6)
	{
		audio.PlayOneShot(HitNoise3);
	}*/
	
}

function ApplyCharacter1AgroPoint(Character1AgroPoint : float){

	Character1AgroGain = Character1AgroPoint;
	gameObject.SendMessageUpwards("ApplyCharacter1AgroGain", Character1AgroGain, SendMessageOptions.DontRequireReceiver);

}