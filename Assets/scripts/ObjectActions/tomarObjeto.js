#pragma strict

var vida : int = 1;
var nombreObjeto : String = null;
var jugador : GameObject = null;
var alerta : GameObject = null;

function Start () {

}

function Update () {
	if(vida <=0){
		destruir();
	}
}

function golpiar(golpe : int){
	vida -= golpe;
}

function destruir(){
	Destroy(gameObject);
	alerta.GetComponent(GUIText).text = "Has obtenido "+nombreObjeto;
	alerta.animation.Play("GUI-textoAlert");
	agregarInventario(nombreObjeto);
}

function agregarInventario(item){
	jugador.SendMessage("set"+item,true,SendMessageOptions.DontRequireReceiver);
}