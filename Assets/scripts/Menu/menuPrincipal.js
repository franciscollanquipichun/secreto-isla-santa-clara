#pragma strict

var BotonSalir = false;
var BotonJugar = false;
var BotonCredito = false;
var BotonVolver = false;
var camara : GameObject = null;

function Start () {

}

function Update () {

}
// seleccionar texto
function OnMouseEnter() {
	if(BotonVolver==false){
		renderer.material.color = Color.red;
		animation.Play("Menu-textoSeleccion");
	}else{
		renderer.material.color = Color.red;
	}
}
// desceleccionar texto
function OnMouseExit() {
	if(BotonVolver == false){
		renderer.material.color = Color.white;
		animation.Play("Menu-textoDeseleccion");
	}else{
		renderer.material.color = Color.white;
	}
}

// Accion de botones
function OnMouseUp(){
	if(BotonJugar) {
		Application.LoadLevel("Isla Santa Clara");	
	}
	else if(BotonCredito) {
		camara.animation.Play("giro0-45");
	}
	else if(BotonVolver){
		camara.animation.Play("giro45-0");
	}else{
		Application.Quit();
	}
}