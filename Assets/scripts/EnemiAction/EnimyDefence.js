
var vida : int = 100;
var defensa: int = 20;
var jugador : GameObject = null;

//animacion
private var anim;
private var parado : int = Animator.StringToHash("Base Layer.Parado");

function Start () {
	anim = GetComponent(Animator);
}

function Update () {
	if(vida <=0){
		destruir();
	}
}

function golpiar(golpe : int){
	var golpeNeto = golpe - defensa;
	if(golpeNeto < 0){
		vida -= 0;	
	}else{
		vida -= golpeNeto;
	}
	Debug.Log("Vida restante: "+vida);
}

function destruir(){
	anim.SetBool("estaMuerto", true);
}