$(document).ready(function() {
	
	
	
	
	$('#loaderbutton').click(function() {
		
		var $loader = $('<div id="shopping" />').load('mi_archivohtml5.html #box');
	
		$loader.appendTo('body');
		
	});
	
	$('#accion').click(function() {
	
		$('.slide01').delay(1000).slideup(500 , function(){
			$('.slide02').delay(3000).slideup(500 , function(){
				$('.slide03').delay(3000).slideup(500 , function(){
					$('.slide04').delay(5000).slideup(500 , function(){
						$('.slide05').delay(6000).slideup(500);
					});	
				});
			});
		});
	});
	
});