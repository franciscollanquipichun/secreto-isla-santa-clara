#pragma strict
var sonido : AudioClip = null;
var destello : GameObject = null;
var polvo : GameObject = null;

private var colision = false;
private var tiempo = 0;

function Update () {
	if(colision == true && Time.time - tiempo > 5){
			Application.LoadLevel("Isla Santa Clara - subsuelo");
	}
}

function OnTriggerEnter (obj : Collider){
	audio.PlayOneShot(sonido);
	destello.light.enabled = true;
	destello.animation.Play("metiorito-explocion");
	polvo.SetActive(true);
	colision = true;
	tiempo = Time.time;
}