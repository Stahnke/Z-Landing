var ZombieDamage : int = 10;

function OnTriggerEnter(PlayerCol : Collider){

	if(PlayerCol.tag == "Player")
	{
		gameObject.Find("Character1").SendMessageUpwards("ApplyZombieDamage", ZombieDamage, SendMessageOptions.DontRequireReceiver);
	}
	
	if(PlayerCol.tag == "Ship")
	{
		gameObject.Find("Ship").SendMessageUpwards("ApplyZombieDamage", ZombieDamage, SendMessageOptions.DontRequireReceiver);
	}

}