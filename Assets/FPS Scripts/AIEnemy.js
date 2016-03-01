var distance;   
var lookAtDistance = 500.0;
var attackRange = 200.0;
var stoprange = 0.5;
var Target : Vector3;
var MoveSpeed = 2.0;
var RunSpeed = 5.0;
var damping = 6.0;

var ShipAgro : float = 4;
var Character1Agro : float = 0;
var Character1Active : boolean = true;
    
private var isItAttacking = false;
    
function Start(){

	Target = gameObject.Find("Ship").transform.position;

}

function Update (){
    
    if(Character1Active == false)
    {
    	Character1Agro = 0;
    }
    
    if(ShipAgro > Character1Agro) 
    {
    	Target = gameObject.Find("Ship").transform.position;
    }
    
    if(Character1Agro > ShipAgro)
    {
    	Target = gameObject.Find("Character1").transform.position;
    }
    
    distance = Vector3.Distance(Target, transform.position);

    if(distance < lookAtDistance && distance > stoprange)
    {
    isItAttacking = false;
    renderer.material.color = Color.yellow;
    lookAt ();
    }
       
    if(distance > lookAtDistance)
    {
    renderer.material.color = Color.green; 
    }
    
    if(distance < attackRange && distance > stoprange)
    {
    attack ();
    }
    
    if(isItAttacking)
    {
    renderer.material.color = Color.red;
    }
}


function lookAt ()
{

var rotation = Quaternion.LookRotation(Target - transform.position);
transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);

	transform.Translate(Vector3.forward * MoveSpeed *Time.deltaTime);
}

function attack ()
{
    isItAttacking = true;
    renderer.material.color = Color.red;

    transform.Translate(Vector3.forward * RunSpeed *Time.deltaTime);   
}

function ApplyCharacter1AgroGain(Character1AgroGain : float){

	Character1Agro += Character1AgroGain;


}

function ResetCharacter1Agro(Character1Death : boolean){

	Character1Active = Character1Death;

}