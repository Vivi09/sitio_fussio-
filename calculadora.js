// JavaScript Document

var calculadora = {
	
	calcular: function (x, y, fn) {
		
		return fn (x, y);
		
	}//final calcular
	};//final calculadora
	
	var sum = function (x, y) {
		return x + y;
		
		}, // final var sum
	
	diff = function (x, y) {
		return x - y;
		}; // final diff
		
		var sumResultado = calculadora.calcular(2, 4, sum); // resulta 6
		var resResultado = calculadora.calcular(6, 3, diff); // resulta 3