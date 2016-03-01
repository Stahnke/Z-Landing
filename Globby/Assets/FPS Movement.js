
public var MoveSpeed : float;
public var NormalMoveSpeed : float = 5;
public var SprintSpeed : float = 15;
public var SprintEnergy : float;
public var MaxEnergy : float = 60;
public var EnoughEnergy : float;

public var JumpSpeed : float = 10;
public var MoveDirection = Vector3.zero;
public var Gravity : float = 45;
public var grounded : boolean = false;
var Sprint : boolean = false;

function Start(){


	MoveSpeed = NormalMoveSpeed;
	SprintEnergy = MaxEnergy;
	EnoughEnergy = MaxEnergy * 0.5;
	
	

}

function Update () {

	if(grounded)
	{
		MoveDirection = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
		
			MoveDirection = transform.TransformDirection(MoveDirection);
			
				MoveDirection *= MoveSpeed;
	}
	
	if(grounded)
	{
		if(Input.GetKey(KeyCode.Space))
		{
			MoveDirection.y = JumpSpeed;
		}
}
		
		MoveDirection.y -= Gravity * Time.deltaTime;
		
			var Controller = GetComponent(CharacterController);
			
				var Flags = Controller.Move(MoveDirection * Time.deltaTime);
				
					grounded = (Flags & CollisionFlags.CollidedBelow) !=0;
					
	if(Input.GetButtonDown("Sprint") && SprintEnergy > EnoughEnergy){
	
		Sprint = true;
		
	}
	
	if(Input.GetButtonUp("Sprint")){
	
		Sprint = false;
	
	}
	
	if(Sprint == true){
	
		MoveSpeed = SprintSpeed;
		SprintEnergy -= 0.5;
		
	
	}
	
	if(Sprint == false){
	
		MoveSpeed = NormalMoveSpeed;
		SprintEnergy += 0.5;
	
	}
	
	if(SprintEnergy == 0){
	
		Sprint = false;
	
	}
	
	if(SprintEnergy < 0)
	{
		Zero();
	}
	
	if(SprintEnergy > MaxEnergy)
	{
		Max();
	}

}

function Zero(){

	SprintEnergy = 0;

}

function Max(){

	SprintEnergy = MaxEnergy;

}

