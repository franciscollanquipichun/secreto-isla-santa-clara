//autor: Francisco Llanquipichun
#pragma strict
var btnSalir : GameObject;

function OnMouseEnter() {
	if(btnSalir==false){
		renderer.material.color = Color.red;
	}else{
		renderer.material.color = Color.red;
	}
}
// desceleccionar texto
function OnMouseExit() {
	if(btnSalir == false){
		renderer.material.color = Color.white;
	}else{
		renderer.material.color = Color.white;
	}
}

// Accion de botones
function OnMouseUp(){
	if(btnSalir) {
		Time.timeScale = 1.0;
		Application.Quit();
	}
}