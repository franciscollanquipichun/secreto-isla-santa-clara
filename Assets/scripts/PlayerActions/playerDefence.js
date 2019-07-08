#pragma strict

var vida : int = 100;
var defensa: int = 10;
var enemigo : GameObject = null;
var ataqueBolaFuego : int = 5;
var NombreScena : String;

function Start () {

}

function Update () {
	if(vida <=0){
		destruir();
	}
}

function OnGUI () {
	if(vida < 100 && vida > 0){
		GUI.Label(Rect(10,50,80,20),"JUGADOR");
		GUI.Box(Rect(85,50,vida*2,20),""+vida+"%");
	}
}

function golpiar(golpe : int){
	Debug.Log("GOLPE RESIVIDO");
	var golpeNeto = golpe - defensa;
	if(golpeNeto < 0){
		vida -= 0;	
	}else{
		vida -= golpeNeto;
	}
	Debug.Log("Vida restante: "+vida);
}

function destruir(){
	Debug.Log("JUGADOR MUERTO");
	Application.LoadLevel(NombreScena);
}

function OnTriggerEnter (other: Collider) {

	if (other.tag=="ataque"){
		vida -= ataqueBolaFuego;
	}	
}