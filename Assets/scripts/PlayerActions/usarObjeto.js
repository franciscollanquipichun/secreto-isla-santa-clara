#pragma strict
//lista de objetos utilizables
var cuchillo = true;
var mochila = false;
var linterna = false;
var brujula = false;
var mapa = false;
var luzQuimica : int = 0;
var objetoLinterna : GameObject = null;// Luz de la linterna
var objetoLinternaEquipada : GameObject = null;//modelo de la lineterna
var objetoLuzQuimica : GameObject = null;
var objetoBrujulaEquipada : Transform = null;
var objetoCuchilloEquipado : Transform = null;
//Objetos en el menú inventario
var invCuchillo : Transform = null;
var invLinterna : Transform = null;
var invMochila : Transform = null;
var invBrujula : Transform = null;
var invMapa : Transform = null;
var invLQ : Transform = null;
var invCantidadLQ : GameObject = null;

var puntoLanzamiento : Transform;

private var estadoLinterna = false;

function Start () {
	if(objetoLinterna != null){
		objetoLinterna.light.enabled = estadoLinterna;
	}
}

function Update () {
	//Encender linterna
	if(Input.GetButtonDown("Fire2")){
		if(estadoLinterna == false){
			encenderLinterna(true);
		}else{
			encenderLinterna(false);
		}
	}
	//lanzar luz quimica
	if(Input.GetButtonDown("Fire3")){
		if(luzQuimica > 0){
			var CloneFire : GameObject = Instantiate (objetoLuzQuimica, puntoLanzamiento.position, Camera.main.transform.rotation);
			CloneFire.rigidbody.AddRelativeForce(new Vector3(0, 0, 10), ForceMode.VelocityChange);
			luzQuimica--;
		}
	}
	//golpear con cuchillo
	if(Input.GetButtonDown("Fire1") && objetoCuchilloEquipado.active == true){
		objetoCuchilloEquipado.animation.CrossFade("cuchilloGolpe",0.2f);
	}
	//equipar brujula
	if(Input.GetButtonUp("Brujula")){
		if(brujula == true && objetoBrujulaEquipada.active == false){
			objetoCuchilloEquipado.active = false;
			objetoBrujulaEquipada.active = true;
		}else{
			objetoBrujulaEquipada.active = false;
		}
	}
	//equipar cuchillo
	if(Input.GetButtonUp("Cuchillo")){
		if(cuchillo == true && objetoCuchilloEquipado.active == false){
			objetoBrujulaEquipada.active = false;
			objetoCuchilloEquipado.active = true;
		}else{
			objetoCuchilloEquipado.active = false;
		}
	}
	actualizarInventario();
}

//encender apagar linterna
function encenderLinterna(resp){
	if(linterna == true && objetoLinterna != null){	
		objetoLinterna.light.enabled = resp;
		estadoLinterna = resp;
	}
}

//equipar desequipar mochila
function setMochila(resp){
	mochila = resp;
	brujula = resp;
	mapa = resp;
	if(resp == true){
		luzQuimica = 6;
	}else{
		luzQuimica = 0;
	}
}
function setLinterna(resp){
	linterna = resp;
	objetoLinternaEquipada.SetActive(resp);
}

//Modifica los items visibles en el inventario
function actualizarInventario(){
	
	if(cuchillo ==true){
		invCuchillo.active = true;
	}else{
		invCuchillo.active = false;
	}

	if(mochila == true){
		invMochila.active = true;
	}else{
		invMochila.active = false;
	}

	if(linterna == true){
		invLinterna.active = true;
	}else{
		invLinterna.active = false;
	}

	if(brujula ==true){
		invBrujula.active = true;
	}else{
		invBrujula.active = false;
	}

	if(luzQuimica > 0){
		invLQ.active = true;
		invCantidadLQ.GetComponent(TextMesh).text = "x "+luzQuimica;
	}else{
		invLQ.active = false;
	}
}