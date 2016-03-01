var prefabBullet:Transform;
var shootForce:float;

function Update () {

if(Input.GetButton("Shoot"))
	{
	var instancebullet = Instantiate(prefabBullet, transform.position, Quaternion.identity);
	instancebullet.rigidbody.AddForce(transform.forward * shootForce);
	}
}