
let  $ = function(ele){
	return document.querySelector(ele);
}
let $all = function(e) {
	return document.querySelectorAll(e);
}





	



document.addEventListener('DOMContentLoaded', function () {
	
	
	let navarrow = $all('.navarrow'),
		maxH = "200px",
		panel = $all('.sections_panel'),
		clic = $all(".clic");
	for (let i = 0; i < navarrow.length; i++) {
		
		navarrow[i].addEventListener("click", function(){
		
		
		


		if (panel[i].style.height == maxH){
			
			panel[i].style.height = "0px";
			navarrow[i].innerHTML = "&#9662;";
			clic[i].style.opacity = "0";

			
		}
		else {
			
			
			panel[i].style.height = "200px";
			navarrow[i].innerHTML = "&#9652;";
			clic[i].style.opacity = "1";

			
		}

	});

		
	}

	
	

	
	

});