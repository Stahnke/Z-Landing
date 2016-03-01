var Money : int;
var MoneyGuiText: GameObject;
var ShopMenuObject : GameObject;

function Start () {

	Money = 100;

}

function Update(){

	if(Money < 0)
	{
		Zero();
	}
	
	ShopMenuObject.SendMessageUpwards("CheckMoney", Money, SendMessageOptions.DontRequireReceiver);
	
	MoneyGuiText.guiText.text = "Money: " + Money + "G";
	
	


}

function ApplyMoneyGain(MoneyGain : int){

	Money += MoneyGain;

}

function ApplyMoneyLoss(MoneyLoss : int){

	Money -= MoneyLoss;

}

function Zero(){

	Money = 0;

}