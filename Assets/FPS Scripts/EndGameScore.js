var buttonheight : int = 50;
var buttonwidth : int = 200;
var spacing : int = 50;

function OnGUI(){

	GUILayout.BeginArea(Rect(Screen.width/2 - buttonwidth/2, Screen.height - Screen.height/4, buttonwidth, buttonheight * 8));
	
		if(GUILayout.Button("Retry", GUILayout.Height(buttonheight)))
		{
			Application.LoadLevel("UnityFPS");
		}
	
		GUILayout.Space(spacing);
	
		if(GUILayout.Button("Quit", GUILayout.Height(buttonheight)))
		{
		
		}
	
	GUILayout.EndArea();
	
}