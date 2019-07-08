#pragma strict
var evento : Transform;
var musica : AudioClip = null;

function OnTriggerEnter(other : Collider){
	audio.PlayOneShot(musica);
}