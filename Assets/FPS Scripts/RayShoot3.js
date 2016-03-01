
var Range: float = 1000;
var Force: float = 1000;
var ClipsLeft : int;
var ClipsPerGun : int = 36;
var ClipsDifference;
var BulletsPerClip : int = 6;
var ReloadTime: float = 3.3;
var BulletsLeft : int = 0;
var ShootTimer: float = 0;
var ShootCooler: float = 0.45;
var coneAngle : float = 1.5;
var bulletPrefab : GameObject;
var spawnPoint : Transform;
var BulletMeter : GameObject;
var StartingDamage : int = 100;
var Damage : int;
var BulletCounterText : GameObject;
var Gun3 : GameObject;
var Character1AgroPoint : float;

public var ShootAudio : AudioClip;
public var ReloadAudio : AudioClip;

function Start(){

	Damage = StartingDamage;
	ClipsLeft = ClipsPerGun;
	
	BulletsLeft = BulletsPerClip;
	BulletMeter.light.color.g = 5;
	BulletMeter.light.color.r = 0;

}

function Update () {

	Character1AgroPoint = Damage/10;

	BulletCounterText.guiText.text = "Ammo " + BulletsLeft + "/" + BulletsPerClip + " Clips " + ClipsLeft + "/" + ClipsPerGun;


	if(BulletsLeft == BulletsPerClip)
	{
	BulletMeter.light.color.g =5;
	BulletMeter.light.color.r =0;
	}
	
	if(ShootTimer > 0)
	{
		ShootTimer -= Time.deltaTime;	
	}
	
	if(ShootTimer < 0)
	{
		ShootTimer = 0;
	}
	
	if(Input.GetMouseButtonDown((0)))
	{
		if(ShootTimer == 0 && BulletsLeft)
		{
		//PlayShootAudio();
		RayShoot();
		ShootTimer = ShootCooler;
		}
	}
	
	if(Input.GetButton("Reload") && ClipsLeft > 0 && BulletsLeft < BulletsPerClip && Gun3.transform.localRotation.y == 0)
	{
		Reload();
	}
	
}

function RayShoot () {

	//GameObject.Find("Gun").animation.Play("GunShoot");

	var Hit : RaycastHit;
	var DirectionRay = transform.TransformDirection (Vector3.forward);
	
	Debug.DrawRay(transform.position, DirectionRay * Range, Color.blue);
	
		if(Physics.Raycast(transform.position , DirectionRay, Hit, Range))
			{
				if(Hit.rigidbody)
				{
					Hit.rigidbody.AddForceAtPosition(DirectionRay * Force, Hit.point);
					Hit.collider.SendMessageUpwards("ApplyDamage", Damage, SendMessageOptions.DontRequireReceiver);
					Hit.collider.SendMessageUpwards("ApplyCharacter1AgroPoint", Character1AgroPoint, SendMessageOptions.DontRequireReceiver);
				}
			}
	BulletMeter.light.color.r += 0.9;
	BulletMeter.light.color.g -= 0.9;
	BulletsLeft --;
		
	
		if(BulletsLeft < 0)
		{
			BulletsLeft = 0;
		}
		
		//Spawn Visual Bullet
			var go : GameObject = Spawner.Spawn (bulletPrefab, spawnPoint.position, spawnPoint.rotation) as GameObject;
			var bullet : SimpleBullet = go.GetComponent.<SimpleBullet> ();

}

function Reload() {

	GameObject.Find("Gun3").animation.Play("GunReload3");
	
	PlayReloadAudio();

	yield WaitForSeconds(ReloadTime);
	
		ClipsDifference = BulletsPerClip - BulletsLeft;
		
	if(ClipsLeft >= BulletsPerClip)
	{
		BulletsLeft = BulletsPerClip;
	}
	
	if(ClipsLeft < BulletsPerClip)
	{
		BulletsLeft += ClipsLeft;
	}	
		ClipsLeft -= ClipsDifference;
		
		if(ClipsLeft < 0)
		{
		ClipsLeft = 0;
		}
		
		

}

function ApplyDamagePlus(DamagePlus : int){
	
	Damage = StartingDamage;
	Damage += DamagePlus;
}

function ApplyMachineGunClips(MachineGunClips : int){

	ClipsLeft += MachineGunClips;
	
	if(ClipsLeft > ClipsPerGun)
	{
		ClipsLeft = ClipsPerGun;
	}

}



function PlayShootAudio() {

	audio.PlayOneShot(ShootAudio);

}

function PlayReloadAudio(){

	audio.PlayOneShot(ReloadAudio);
	
}