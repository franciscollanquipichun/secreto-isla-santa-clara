//autor: Francisco Llanquipichun
#pragma strict

var charController : CharacterController;
var charMotor : CharacterMotor;
//objetos con animación
var camara : GameObject = null;

var linterna : Transform;
var linternaLuz : GameObject = null;

var brujula : Transform = null;

var cuchillo : Transform = null;
//variables de movimiento del personaje
var velocidadActual : float;
var velocidadCaminando : float = 3.5;
var velocidadCorriendo : float = 7.5;

var velocidadAnimacion : float = 0;

function Start () {

}

function Update () {

	velocidadActual = charController.velocity.magnitude;
	//cambios en el movimiento
	if((Input.GetAxis("Vertical")!=0 || Input.GetAxis("Horizontal")!=0) && velocidadActual > 0){
		if(Input.GetButton("Run")){
			correr();
		}else{
			caminar();
		}
	}
	else{
		parado();
	}
}

function caminar(){

	velocidadAnimacion = velocidadActual / velocidadCaminando *1.2f;

	charMotor.movement.maxForwardSpeed = velocidadCaminando;
	charMotor.movement.maxSidewaysSpeed = velocidadCaminando;
	charMotor.movement.maxBackwardsSpeed = velocidadCaminando /2;
	camara.animation["caminar"].speed = velocidadAnimacion;
	camara.animation.CrossFade("caminar", 0.1f);
	//animacion linterna
	if(linterna.active == true){
		linterna.animation["linternaCaminar"].speed = velocidadAnimacion;
		linterna.animation.CrossFade("linternaCaminar", 0.2f);
	}else{
		linterna.animation.CrossFade("linternaDesequipada", 0.2f);
	}
	//animacion brujula
	if(brujula.active == true){
		brujula.animation["linternaCaminar"].speed = velocidadAnimacion;
		brujula.animation.CrossFade("linternaCaminar", 0.2f);
	}else{
		brujula.animation.CrossFade("brujulaDesequipada",0.2f);
	}
	//animacion cuchillo
	if(cuchillo.active == true){
		cuchillo.animation["linternaCaminar"].speed = velocidadAnimacion;
		cuchillo.animation.CrossFade("linternaCaminar",0.2f);
	}else{
		cuchillo.animation.CrossFade("brujulaDesequipada",0.2f);
	}
}

function correr(){

	velocidadAnimacion = velocidadActual / velocidadCorriendo *1.2f;
	
	charMotor.movement.maxForwardSpeed = velocidadCorriendo;
	charMotor.movement.maxSidewaysSpeed = velocidadCorriendo;
	charMotor.movement.maxBackwardsSpeed = velocidadCorriendo /2;
	camara.animation["caminar"].speed = velocidadAnimacion;
	camara.animation.CrossFade("caminar", 0.1f);
	//animacion linterna
	if(linterna.active==true && linternaLuz.light.enabled==true){
		linterna.animation["linternaCorrer"].speed = velocidadAnimacion;
		linterna.animation.CrossFade("linternaCorrer", 0.2f);
	}else{
		linterna.animation.CrossFade("linternaDesequipada", 0.2f);
	}
	//animacion brujula
	if(brujula.active==true){
		brujula.animation.CrossFade("brujulaDesequipada",0.2f);
	}
	//animacion cuchillo
	if(cuchillo.active == true){
		cuchillo.animation["linternaCaminar"].speed = velocidadAnimacion;
		cuchillo.animation.CrossFade("linternaCaminar",0.2f);
	}else{
		cuchillo.animation.CrossFade("brujulaDesequipada",0.2f);
	}
}
function parado(){
	
	velocidadAnimacion = 1;
	
	camara.animation.CrossFade("parado", 0.1f);
	//animacion linterna
	if(linterna.active == true && linternaLuz.light.enabled == true){
		linterna.animation.CrossFade("linternaParado", 0.2f);
	}else{
		linterna.animation.CrossFade("linternaDesequipada", 0.2f);
	}
	//animacion brujula
	if(brujula.active == true){
		brujula.animation["linternaParado"].speed = velocidadAnimacion;
		brujula.animation.CrossFade("linternaParado", 0.2f);
	}else{
		brujula.animation.CrossFade("brujulaDesequipada",0.2f);
	}
	//animacion cuchillo
	if(cuchillo.active == true){
		//cuchillo.animation["linternaParado"].speed = velocidadAnimacion;
		//cuchillo.animation.CrossFade("linternaParado",0.2f);
	}else{
		cuchillo.animation.CrossFade("brujulaDesequipada",0.2f);
	}
}