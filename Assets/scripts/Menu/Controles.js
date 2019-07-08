//autor: Francisco Llanquipichun
#pragma strict
var btnControles : GameObject;
var controles : Transform;
var inventario : Transform;

function OnMouseEnter() {
	if(btnControles==false){
		renderer.material.color = Color.red;
	}else{
		renderer.material.color = Color.red;
	}
}
// desceleccionar texto
function OnMouseExit() {
	if(btnControles == false){
		renderer.material.color = Color.white;
	}else{
		renderer.material.color = Color.white;
	}
}

// Accion de botones
function OnMouseUp(){
	if(btnControles) {
		controles.active = true;
		inventario.active = false;
	}
}