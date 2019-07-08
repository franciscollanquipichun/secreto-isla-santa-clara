/*	
*	Original script http://www.youtube.com/watch?v=bYuf2xwBGfk
*	Edited for Francisco Llanquipichun
*/
#pragma strict
var pause : boolean = false;
var pauseText : GUIText;
var pauseMenu : Transform;
var puntero : Transform;
pauseMenu.active = false;
pauseText.enabled = false;

function Update(){
	if(Input.GetButtonUp("Pause")) {
		if(pause==true){
			pause = false;
	}else {
		pause = true;
	}
	if(pause == true) {
		Time.timeScale = 0.0;
		pauseMenu.active = true;
		pauseText.enabled = true;
		puntero.active = false;
	}else {
		Time.timeScale = 1.0;
		pauseMenu.active = false;
		pauseText.enabled = false;
		puntero.active = true;
		}
	} 
}