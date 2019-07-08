#pragma strict

var objetivo : Transform;
var amotiguacion = 6.0;

function Start () {

}

function Update () {
	if(objetivo != null){
		var rotacion = Quaternion.LookRotation(objetivo.position - transform.position);
		transform.rotation = Quaternion.Slerp(transform.rotation, rotacion, Time.deltaTime * amotiguacion);
	}
}	