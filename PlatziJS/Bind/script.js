
class Toggable{
	constructor(el){
		//inicializar estado interno
		this.el = el
		this.el.innerHTML = "Off"
		this.activated = false
		this.el.addEventListener('click', this.onClick);
	}

	onClick(ev){
		console.log(this);
		this.activated = !this.activated;
		this.toggleText();
		//Cambiar el estado interno
		//Llamar a toggleText
	}

	toggleText(){
		this.el.innerHTML = this.activated ? 'On' : 'Off';
		//Cambiar el texto
	}
}

const button = document.getElementById("boton");

const miBoton = new Toggable(button);