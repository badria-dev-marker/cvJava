

//parti parfum






document.addEventListener('DOMContentLoaded', function () {
	let timeoutID;
	let i = 1;
	
	function maFunc(){ 
		if(i < 20) {
			imgs[i - 1].style.opacity = "0";
			imgs[i].style.opacity = "1";
			
			
			i = i + 1;
			
			
			 timeoutID = setTimeout(maFunc, 1800);
		}
		
	}

	var imgs =  document.querySelectorAll(".img");
	
	maFunc();



});








