#pragma strict
var evento : Transform;
var cubo : GameObject;
var animacion : String;


function OnTriggerEnter(other : Collider){
	cubo.animation.Play(animacion);
	evento.active = false;
}