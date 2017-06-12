function Entrenador ( nombre, pokemones )
{
	"use strict";
	this.nombre    = nombre || "No definido";	
	this.pokemones = Array.isArray(pokemones) ? pokemones : [];
	this.pokemones_vivos = this.pokemones.length;
}

Entrenador.prototype = {
	setNombre: function ( nombre )
	{
		this.nombre = nombre || "No definido";
	},
	setPokemones: function ( energia )
	{
		this.pokemones = Array.isArray(pokemones) ? pokemones : [];
		this.pokemones_vivos = this.pokemones.length;
	},
	setPokemonesVivos: function ( p_vivos )
	{
		this.pokemones_vivos = +p_vivos > 0 ? +p_vivos : 0;
	},
	retarAEntrenador: function ( rival )
	{
		console.log( "%c>[ENTRENADOR]" + this.nombre + " RETO A UNA PELEA A [ENTRENADOR]" + rival.nombre + " ", 'background: #222; color: #bada55' );
		var turno = 1 ;
		var pokemon_indice = 0;
		var pokemon_indice_rival = 0;

		while ( this.pokemones_vivos > 0 && rival.pokemones_vivos > 0 )
		{
			if( turno == 1 )
			{
				var resultado_batalla = this.pokemones[pokemon_indice].pelearAMuerteContra( rival.pokemones[pokemon_indice_rival]);
				if ( resultado_batalla ) 
				{
					pokemon_indice_rival ++;
					rival.setPokemonesVivos( rival.pokemones_vivos - 1 );
				}
				else
				{
					pokemon_indice ++;
					this.setPokemonesVivos( this.pokemones_vivos - 1 );
				}
				turno = 0;
			}
			else
			{
				var resultado_batalla = rival.pokemones[pokemon_indice_rival].pelearAMuerteContra( this.pokemones[pokemon_indice]);
				
				if ( resultado_batalla ) 
				{
					pokemon_indice ++;
					this.setPokemonesVivos( this.pokemones_vivos - 1 );
				}
				else
				{
					pokemon_indice_rival ++;
					rival.setPokemonesVivos( rival.pokemones_vivos - 1 );
				}

				turno = 1;
			}

		}

		if ( this.pokemones_vivos > 0 )
		{
			console.log( "%c\n\n>El [ENTRENADOR] " + rival.nombre + " se ah quedo sin pokemones! \n%c>[ENTRENADOR] " + this.nombre + " gano el duelo.!!. ",
			"background: #f72d2d; color: #FFF;", "background: #238421; color: #FFF");
		}
		else
		{
			console.log( "%c\n\n>El [ENTRENADOR] " + this.nombre + " se ah quedo sin pokemones! \n%c>[ENTRENADOR] " + rival.nombre + " gano el duelo.!!. ",
			"background: #f72d2d; color: #FFF;", "background: #238421; color: #FFF");
		}
	}
}
