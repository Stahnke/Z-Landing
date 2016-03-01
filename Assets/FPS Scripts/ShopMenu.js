var buttonheight : int = 50;
var buttonwidth : int = 200;
var spacing : int = 50;
var Character1 : GameObject;
var MoneyLoss : int;
var NewMachineGunClips : int;
var ShopMoney : int;

function Update(){

}

function OnGUI(){

	GUILayout.BeginArea(Rect(Screen.width/2 - buttonwidth/2, Screen.height/2 - buttonheight, buttonwidth, buttonheight * 8));
	
		if(GUILayout.Button("25G : Machine Gun Ammo (x60)", GUILayout.Height(buttonheight)))
		{
			if(ShopMoney >= 25)
			{
			MoneyLoss = 25;
			Character1.SendMessageUpwards("ApplyMoneyLoss", MoneyLoss , SendMessageOptions.DontRequireReceiver);
			NewMachineGunClips = 60;
			gameObject.Find("RayPointHolder1").SendMessageUpwards("ApplyNewMachineGunClips", NewMachineGunClips, SendMessageOptions.DontRequireReceiver);
			gameObject.Find("RayPointHolder2").SendMessageUpwards("ApplyNewMachineGunClips", NewMachineGunClips, SendMessageOptions.DontRequireReceiver);
			}
		}
	
		GUILayout.Space(spacing);
	
		if(GUILayout.Button("25G : Magnum Ammo (x6)", GUILayout.Height(buttonheight)))
		{
			if(ShopMoney >= 25)
			{
			MoneyLoss = 25;
			Character1.SendMessageUpwards("ApplyMoneyLoss", MoneyLoss , SendMessageOptions.DontRequireReceiver);
			NewMachineGunClips = 6;
			gameObject.Find("RayPointHolder3").SendMessageUpwards("ApplyNewMachineGunClips", NewMachineGunClips, SendMessageOptions.DontRequireReceiver);
			}
		}
	
	GUILayout.EndArea();
	
}

function CheckMoney(Money : int){

	ShopMoney = Money;

}