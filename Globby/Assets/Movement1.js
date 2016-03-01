var moveSpeed = 3;

function Update () {

	transform.position += transform.forward * moveSpeed * Time.deltaTime;

}