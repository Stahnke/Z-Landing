var ZombieCounterGui : GameObject;
var ZombieCounter : GameObject;

function Update(){

	ZombieCounterGui.guiText.text = "Zombies Left: " + ZombieCounter.transform.position.x;


}