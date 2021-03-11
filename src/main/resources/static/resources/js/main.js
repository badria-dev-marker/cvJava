/**
 * 
 */

/**
 * 
 */

document.addEventListener('DOMContentLoaded', function (){
	let $ = function(ele){
		return document.querySelector(ele);
	}
	let female = $("#female"),
	    mal = $("#mal"),
	    liste = $('ul'),
	    span = $("span");

	let btnDropDown = $('.dropDown1 button'); 
		span.addEventListener('click', function(){
			 
			
			liste.classList.toggle("active");
			if(liste.className == "active")
			{span.innerHTML = "&#9650"; }
		else
			{span.innerHTML = "&#9660";}
			
			
			
			
			
		})
		
	    
	   
	
	//inputValid (fname, label[0]);
	
	
	
	
	
})