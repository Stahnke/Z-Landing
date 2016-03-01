
var Sprint : boolean;
var SprintSpeed : int = 40;
var NormalMoveSpeed: int = 20;
var MoveSpeed : int;


function Start(){

	MoveSpeed = NormalMoveSpeed;
	gameObject.transform.rotation.x = 90;

}

function Update(){

	transform.Translate(Vector3.forward * MoveSpeed *Time.deltaTime);   

	if(Input.GetButtonDown("Sprint")){
	
		Sprint = true;
		
	}
	
	if(Input.GetButtonUp("Sprint")){
	
		Sprint = false;
	
	}
	
	if(Sprint == true){
	
		MoveSpeed = SprintSpeed;
	}
	
	if(Sprint == false){
	
		MoveSpeed = NormalMoveSpeed;
	}
}