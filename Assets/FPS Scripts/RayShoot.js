
var Range: float = 1000;
var Force: float = 1000;
var ClipsLeft : int;
var ClipsPerGun : int = 180;
var ClipsDifference : int;
var BulletsPerClip : int = 60;
var ReloadTime: float = 3.3;
var BulletsLeft : int = 0;
var ShootTimer: float = 0;
var ShootCooler: float = 0.1;
var coneAngle : float = 1.5;
var bulletPrefab : GameObject;
var spawnPoint : Transform;
var BulletMeter : GameObject;
var StartingDamage : int = 10;
var Damage : int;
var Total : int;
var NewTotal : int;
var BulletCounterText : GameObject;
var Gun1 : GameObject;
var Character1AgroPoint : float;

public var ShootAudio : AudioClip;
public var ReloadAudio : AudioClip;

function Start(){

	Damage = StartingDamage;
	BulletsLeft = BulletsPerClip;
	
	ClipsLeft = ClipsPerGun;

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
	
	if(Input.GetMouseButton((0)))
	{
		if(ShootTimer == 0 && BulletsLeft)
		{
		//PlayShootAudio();
		RayShoot();
		ShootTimer = ShootCooler;
		}
	}
	
	if(Input.GetButton("Reload") && ClipsLeft > 0 && BulletsLeft < BulletsPerClip && Gun1.transform.localRotation.y == 0)
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
	BulletMeter.light.color.r += .08;
	BulletMeter.light.color.g -= .08;
	BulletsLeft --;
		
	
		if(BulletsLeft < 0)
		{
			BulletsLeft = 0;
		}
		
		//Spawn Visual Bullet
			var coneRandomRotation = Quaternion.Euler (Random.Range (-coneAngle, coneAngle), Random.Range (-coneAngle, coneAngle), 0);
			var go : GameObject = Spawner.Spawn (bulletPrefab, spawnPoint.position, spawnPoint.rotation * coneRandomRotation) as GameObject;
			var bullet : SimpleBullet = go.GetComponent.<SimpleBullet> ();

}

function Reload() {

	GameObject.Find("Gun1").animation.Play("GunReload1");
	
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