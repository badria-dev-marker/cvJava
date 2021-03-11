'use strict';



function fTrianglePascal(){

	

  var hello_pascal = document.querySelector('.hello_pascal');



	var parent = document.getElementById('t_pas_1');
   var div_parag_pascal = document.querySelector('.div_parag_pascal');
	var parag_pascal = document.getElementById('parag_pascal');
	var header_row_trianglePascal = document.querySelector('.header_row_trianglePascal');
	var value = parseInt(document.getElementById('nombre').value);
	
	var table_Pascal = document.getElementById('table_Pascal');
	

	var tableBody = document.createElement('tbody');
  
  

	
	var mat = new Array ();
	var i , j, text;
   hello_pascal.style.display = 'none';

  if (isNaN(value)) { 
    
    if (table_Pascal.childNodes.length != 0) {
              table_Pascal.removeChild(table_Pascal.childNodes[0]); 

          }
          div_parag_pascal.style.height = '95%';
            parag_pascal.style.fontSize = '40px';
           
            parag_pascal.innerHTML = '<p> n doit être un nombre</p>'; 
  }

    else {

        
      

        if (value > 0 && value < 25) {


          

          if (table_Pascal.childNodes.length != 0) {
              table_Pascal.removeChild(table_Pascal.childNodes[0]); 

          }
          

        for (i = 0 ; i < value ; i++) {
          var row = document.createElement('tr');
          row.id = "row" + i;
          mat[i] = new Array();

          for (j = 0 ; j <= i ; j++) {
            var col = document.createElement('td');
            col.id = 'col' + i + " " + j;
            if ((i == j) ||(j == 0)) {
             mat[i][j] = 1;
             text = document.createTextNode(mat[i][j]);
             col.appendChild(text);
              col.style.color = '#00F';
                    col.style.background = 'lime';

              }
            else {
              mat[i][j] = mat[i-1][j-1] + mat[i-1][j];
              text = document.createTextNode(mat[i][j]);
               col.appendChild(text);
              col.style.color = '#00f';
                      col.style.background = 'rgba(100, 150, 250, 0.7)';
                              

            }
             row.appendChild(col); 


          }
          tableBody.appendChild(row);


        }
        table_Pascal.appendChild(tableBody);
        
        parag_pascal.innerHTML = 'Ceci est un triangle de Pascal de n = ' + value;
         parag_pascal.style.fontSize = '20px';
  }

  else if (value == 0) {

      if (table_Pascal.childNodes.length != 0) {
              table_Pascal.removeChild(table_Pascal.childNodes[0]); 

          }

            div_parag_pascal.style.height = '95%';
            parag_pascal.style.fontSize = '40px';
           
            parag_pascal.innerHTML = '<p> si n est nul<br> ( <var>a</var> + <var>b</var> ) <sup>0</sup> = 1</p> '; 


  }

      else {
        if (table_Pascal.childNodes.length != 0) {
              table_Pascal.removeChild(table_Pascal.childNodes[0]); 

          }
          div_parag_pascal.style.height = '95%';
            parag_pascal.style.fontSize = '40px';
           
            parag_pascal.innerHTML = '<p> n doit être un nombre entier positif inférieur à 24</p>'; 
      }
    
   
  

    }


}





