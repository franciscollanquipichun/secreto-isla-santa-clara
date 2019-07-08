#pragma strict

var golpe : int = 1;
var distancia : float;
var distanciaMax : float = 2.5;
var cuchillo : Transform = null;

function Start () {

}

function Update () {
	
	if(Input.GetButtonDown("Fire1")){
		var hit : RaycastHit;
		if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)){
			distancia = hit.distance;
			if(distancia < distanciaMax){
				if(cuchillo.active == true){
					golpe = 50;
				}else{
					golpe = 1;
				}
				hit.transform.SendMessage("golpiar", golpe, SendMessageOptions.DontRequireReceiver);
			}
		}
	}
}