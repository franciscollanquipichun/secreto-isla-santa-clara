#pragma strict

var objeto : GameObject = null;
var tiempo : float = 10;

function Start () {
	Destroy(this.gameObject, tiempo);
}