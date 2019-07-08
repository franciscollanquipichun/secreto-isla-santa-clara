//autor: Francisco Llanquipichun
#pragma strict
var btnFinalizar : GameObject;

function OnMouseEnter() {
	if(btnFinalizar==false){
		renderer.material.color = Color.red;
	}else{
		renderer.material.color = Color.red;
	}
}
// desceleccionar texto
function OnMouseExit() {
	if(btnFinalizar == false){
		renderer.material.color = Color.white;
	}else{
		renderer.material.color = Color.white;
	}
}

// Accion de botones
function OnMouseUp(){
	if(btnFinalizar) {
		Time.timeScale = 1.0;
		Application.LoadLevel("Menu principal");
	}
}