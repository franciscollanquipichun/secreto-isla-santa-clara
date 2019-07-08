#pragma strict

var evento : Transform;
var iluminacion : GameObject = null;
var luzPiramide : GameObject = null;
var luzCubo : GameObject = null;
var Cubo : GameObject = null;
var sonido : AudioClip = null;
var Color : Color;
var EnemigoFinal : GameObject = null;
var GuiAlerta : GameObject = null;

function Update(){
	if(EnemigoFinal == null){
		Application.LoadLevel("Creditos");
	}
} 

function OnTriggerEnter(other : Collider){
	if(other.tag == "Player"){
		iluminacion.light.enabled = true;
		iluminacion.animation.Play("Luz-fadeIn");
		audio.PlayOneShot(sonido);
		luzPiramide.light.color = Color;
		luzCubo.light.color = Color;
		Cubo.renderer.material.color = Color;
	}
}