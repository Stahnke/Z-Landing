var buttonheight : int = 50;
var buttonwidth : int = 200;
var spacing : int = 50;

function OnGUI(){

	GUILayout.BeginArea(Rect(Screen.width/2 - buttonwidth/2, Screen.height/2 - buttonheight, buttonwidth, buttonheight * 8));
	
		if(GUILayout.Button("Play", GUILayout.Height(buttonheight)))
		{
			Application.LoadLevel("UnityFPS");
		}
	
		GUILayout.Space(spacing);
	
		if(GUILayout.Button("Exit", GUILayout.Height(buttonheight)))
		{
		
		}
	
	GUILayout.EndArea();
	
}