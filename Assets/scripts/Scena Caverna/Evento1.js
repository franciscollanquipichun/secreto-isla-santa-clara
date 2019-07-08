#pragma strict
var evento : Transform;
var cubo : GameObject;


function OnTriggerExit(other : Collider){
	cubo.animation.Play("cubo-movimiento1");
	evento.active = false;
}