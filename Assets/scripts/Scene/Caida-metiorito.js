#pragma strict
var metiorito : GameObject = null;
var cubo : GameObject = null;
var luz : GameObject = null;
var sonido : AudioClip = null;

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	luz.light.enabled = false;
	metiorito.SetActive(true);
	metiorito.animation.Play("metiorito-trayectoria");
}