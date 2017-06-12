
function Pokemon ( nombre, energia, vive, fuerza, experiencia )
{
	"use strict";
	this.nombre      = nombre || "No definido";
	this.vive        = vive || true;
	this.energia     = +energia > 0 ? +energia : 0;
	this.fuerza      = +fuerza || 0;
	this.experiencia = +experiencia || 1;
}

Pokemon.prototype = {
	setNombre: function ( nombre )
	{
		this.nombre = nombre || "No definido";
	},
	setEnergia: function ( energia )
	{
		this.energia = +energia > 0 ? +energia : 0;
		this.vive    = this.energia > 0 ? true : false;
	},
	setVive: function ( vive )
	{
		this.vive = vive || true;
	},
	setFuerza: function ( fuerza )
	{
		this.fuerza = +fuerza || 0;
	},
	setExperiencia: function ( experiencia )
	{
		this.experiencia = +experiencia || 0;
	},
	golpearA: function ( rival )
	{
		console.log( "%c>[POKEMON]" + this.nombre + " golpea A [POKEMON]" + rival.nombre + " ", "background: #f72d2d; color: #FFF " );

		rival.setEnergia( rival.energia - ( this.fuerza * this.experiencia ) );
	},
	getDatos: function ()
	{		
		console.log( 
			"%c[ \t POKEMON \t | \t VIVO \t | \t ENERGIA \t | \t FUERZA \t | \t EXPERIENCIA \t ]"
			+ "\n[ \t " + this.nombre + " \t | \t " + this.vive  + " \t | \t " + this.energia + " \t\t | \t\t " + this.fuerza + " \t | \t\t " + this.experiencia+ " \t\t ] \t" 
			, 'background: #222; color: #bada55' );
	},
	pelearAMuerteContra: function ( rival )
	{
		console.log( "%c\n\n\n>[POKEMON]" + this.nombre + "  PELEA A MUERTE CON [POKEMON]" + rival.nombre + " ", 'background: #222; color: #bada55' );
		var turno = false;

		while ( this.vive && rival.vive )
		{
			if ( ! turno )
			{
				this.golpearA(rival);
				rival.getDatos();
				turno = true;
			}
			else 
			{
				rival.golpearA(this);
				this.getDatos();
				turno = false;
			}
		}

		if ( ! rival.vive && this.vive )
		{
			console.log( "%c\n>El [POKEMON] rival " + rival.nombre + " se ah debilitado! \n%c>[POKEMON] " + this.nombre + " gano la batalla.!! \n>[POKEMON] " + this.nombre + " ah ganado experiencia. ",
			"background: #f72d2d; color: #FFF;", "background: #238421; color: #FFF");
			this.setExperiencia( this.experiencia + 1 );
		}
		else if ( ! this.vive && rival.vive )
		{
			console.log( "%c\n>El [POKEMON] " + this.nombre + " se ah debilitado! \n%c>El [POKEMON] Rival " + rival.nombre + " gano la batalla.!! \n>[POKEMON] " + rival.nombre + " ah ganado experiencia. ",
			"background: #f72d2d; color: #FFF;", "background: #238421; color: #FFF" );			
			rival.setExperiencia( rival.experiencia + 1 );
		}
		else
		{
			console.log( "%c\n>El [POKEMON] " + this.nombre + " y El [POKEMON] " + rival.nombre + " se han debilitado! [EMPATE]. ", "background: #f72d2d; color: #FFF;" );	
		}
		this.getDatos();
		rival.getDatos();

		return turno ;
	}
}
