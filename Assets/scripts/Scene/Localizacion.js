#pragma strict
var localizacion : GameObject = null;


function Start () {

}

function Update () {
	if(localizacion != null){
		if(Time.time > 5 && Time.time < 10)
		{
			localizacion.SetActive(true);
		}else{
			localizacion.SetActive(false);
		}
	}
}