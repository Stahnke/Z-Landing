
	public enum RotationAxis {MouseX = 0, MouseY = 1}
	
		var RotationAxisRotationXY = RotationAxis.MouseX | RotationAxis.MouseY;

		//We are defining the variable need for our X axis motion. This will include
		// Sensitivity and the minimum and maximum of the x axis rotation.
		
		var sensitivityX : float = 400f;
		
		var minimumX : float = -360f;
		
		var maximumX : float = 360f;
		
		var RotationX : float = 0f;
		
		var OriginalRotation : Quaternion;
		
		//Same for Y axis
		
		var sensitivityY : float = 400f;
		
		var minimumY : float = -25f;
		
		var maximumY : float = 25f;
		
		var RotationY : float = 0f;
		
		var XQuaternion: Quaternion;
		
		var YQuaternion: Quaternion;
		
		var Game: Transform;
		
function Update () {
	
	if(RotationAxisRotationXY == RotationAxis.MouseX)
	{
		RotationX += Input.GetAxis("Mouse X") * sensitivityX * Time.deltaTime;
	
		RotationX = ClampAngle (RotationX, minimumX, maximumX);
		
		OriginalRotation = XQuaternion = Quaternion.AngleAxis (RotationX , Vector3.up);
		
		transform.localRotation = OriginalRotation = XQuaternion;
		}
	
	if(RotationAxisRotationXY == RotationAxis.MouseY)
	{
		RotationY -= Input.GetAxis("Mouse Y") * sensitivityY * Time.deltaTime;
	
		RotationY = ClampAngle (RotationY, minimumY, maximumY);
		
		OriginalRotation = YQuaternion = Quaternion.AngleAxis (RotationY, Vector3.right);
		
		transform.localRotation = OriginalRotation = YQuaternion;
	}
	}
	static function ClampAngle (Angle: float, min:float, max:float): float {
	
	if(Angle < -360)
	{
	Angle += 360;
	}
	if(Angle > 360)
	{
	Angle -= 360;
	}
	return Mathf.Clamp (Angle, min, max);
	}