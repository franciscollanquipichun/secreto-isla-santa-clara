//autor: Francisco Llanquipichun
#pragma strict
var btnInventario : GameObject;
var controles : Transform;
var inventario : Transform;

function OnMouseEnter() {
	if(btnInventario==false){
		renderer.material.color = Color.red;
	}else{
		renderer.material.color = Color.red;
	}
}
// desceleccionar texto
function OnMouseExit() {
	if(btnInventario == false){
		renderer.material.color = Color.white;
	}else{
		renderer.material.color = Color.white;
	}
}

// Accion de botones
function OnMouseUp(){
	if(btnInventario) {
		inventario.active = true;
		controles.active = false;	
	}
}