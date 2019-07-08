#pragma strict
var terreno : GameObject = null;

function OnTriggerExit(other : Collider){
	terreno.SetActive(false);
}

function OnTriggerEnter(other : Collider){
	terreno.SetActive(true);
}