
/*
* Author: Francisco Llanquipichun
* francisco.llanquipichun@gmail.com
*/
var golpe : int = 50;
var vida : int = 100;
var defensa: int = 20;
var jugador : GameObject = null;
var Alerta : GameObject = null;

var distancia;
var objetivo : Transform;//jugador
var distanciaAlerta = 25.0;
var distanciaSeguir = 15.0;
var distanciaAtaque = 1.3;
var distanciaMaxGolpe = 1.5;
var velocidadMovimiento = 5.0;
var amotiguacion = 6.0;
var tiempoRepeticionAtaque = 1;

var controller : CharacterController;
var gravity : float = 20.0;

private var tiempoAtaque : float;
private var DireccionMovimiento : Vector3 = Vector3.zero;

//Variables para uso de animaciones
private var anim;
private var parado : int = Animator.StringToHash("Base Layer.Parado");
private var Caminando : int = Animator.StringToHash("Base Layer.estaCaminando");
private var golpiando : int = Animator.StringToHash("Base Layer.estaGolpeando");

function Start (){
	tiempoAtaque = Time.time;
	anim = GetComponent(Animator);
}

function Update () {
	//calcula la distancia al objetivo
	distancia = Vector3.Distance(objetivo.position, transform.position);
	if(vida > 0){
		if(distancia < distanciaAlerta){
		alertar();
		}
		if(distancia > distanciaAlerta){
			
		}
		if(distancia < distanciaAtaque){
			atacar();
		}else if (distancia < distanciaSeguir){
			seguir();
		}	
	}else{
		morir();
	}
	
}
// dirige la mirada asia el jugador
function alertar(){
	var rotacion = Quaternion.LookRotation(objetivo.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotacion, Time.deltaTime * amotiguacion);
	anim.SetBool("estaCaminando", false);
	anim.SetBool("estaGolpeando", false);
}
// sigue al juagador
function seguir(){

	DireccionMovimiento = transform.forward;
	DireccionMovimiento *= velocidadMovimiento;

	DireccionMovimiento.y -= gravity * Time.deltaTime;
	controller.Move(DireccionMovimiento * Time.deltaTime);

	anim.SetBool("estaCaminando", true);
}
// lanza un golpe
function atacar(){
	if(Time.time > tiempoAtaque){
		
		anim.SetBool("estaGolpeando", true);
		//insertar aqui la accion de ataque
		var hit : RaycastHit;
		if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)){
			distanciaGolpe = hit.distance;
			if(distanciaGolpe < distanciaMaxGolpe){
				hit.transform.SendMessage("golpiar", golpe, SendMessageOptions.DontRequireReceiver);
				Debug.Log("atacando");
			}
		}
		tiempoAtaque = Time.time + tiempoRepeticionAtaque;	
	}
}
//asigna daño recivido por un golpe
function golpiar(golpe : int){
	var golpeNeto = golpe - defensa;
	if(golpeNeto < 0){
		vida -= 0;	
	}else{
		vida -= golpeNeto;
	}
	Debug.Log("Vida restante: "+vida);
}

function morir(){
	anim.SetBool("estaCaminando", false);
	anim.SetBool("estaGolpeando", false);
	anim.SetBool("estaMuerto", true);
	if(Alerta  != null){
			Alerta.GetComponent(GUIText).text = "Jefe final Destruido";
			Alerta.animation.Play("GUI-textoAlert");
		}
	Destroy(this.gameObject, 10);
}