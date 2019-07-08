//This script makes possible underwater effects attach to WaterPlane with a trigger.
//Define variables
var cFogColor : Color = Color (0, 0.4, 0.7, 1);
var nFogDensity : float = 0.04;

//The scene's default fog settings
private var defaultFog : boolean;
private var defaultFogColor : Color;
private var defaultFogDensity : float;

// The Underwater plane to make the distorsion effect.
var UnderWaterPlane : GameObject = null;

function Start () {
	defaultFog = RenderSettings.fog;
	defaultFogColor = RenderSettings.fogColor;
	defaultFogDensity = RenderSettings.fogDensity;
}

function OnTriggerEnter (other : Collider) {
	if(other.name == "Jugador"){
		RenderSettings.fog = true;
		RenderSettings.fogColor = cFogColor;
		RenderSettings.fogDensity = nFogDensity;
		if(UnderWaterPlane != null)
			UnderWaterPlane.SetActive(true);
	}
}


function OnTriggerExit (other : Collider) {
	if(other.name == "Jugador"){
		RenderSettings.fog = defaultFog;
		RenderSettings.fogColor = defaultFogColor;
		RenderSettings.fogDensity = defaultFogDensity;
		if(UnderWaterPlane != null)
			UnderWaterPlane.SetActive(false);
	}
}