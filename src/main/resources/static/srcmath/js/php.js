
// code de creation de circle
function Circle() {
    	var tabPoints = [];
    	var i = 0;
    	console.log('nombre d\'arguments est : ' + arguments.length);
    	if ( arguments.length === 3) {
    		this.node = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    		this.cx = arguments[0];
    		this.cy = arguments[1];
    		this.r = arguments[2];
    		console.log(this.cx);
    		this.data = function () {
    			this.attribute('cx', this.cx);
    			this.attribute('cy', this.cy);
    			this.attribute('r', this.r);
    			
    		}
    		this.attribute = function (key, val) {
			            if ((val == undefined) || (key == undefined)) {
			            	
			            	console.log('ccccccccc');
			             return this.node.getAttribute(key);
			            }
			           
			            else {
			            		console.log('sssssss');
			            		console.log('valeur est : ' + val);
			            		this.node.setAttribute(key, val);
						            
						            
						            console.log('key  :' + key + '    val = ' + val);
			            
			            }
			            
			        }
			

			this.setAttribute = function (key, val) {
				return this.node.setAttribute(key, val);
			}
    		
    	}

    	this.data.apply(this, arguments);
    }

var svgBnuit = document.querySelectorAll('.svgBnuit')[0];



var rect_ciel = document.querySelectorAll('.rect_ciel')[0];
rect_ciel.appendChild(svgBnuit);
console.log('clasname de svg  ');
console.log(svgBnuit.attributes);
var svgPosition = svgBnuit.getBoundingClientRect();
var x_svgBnuit = svgPosition.left;
var y_svgBnuit = svgPosition.top;
var w_svgBnuit = svgPosition.width;
var h_svgBnuit = svgPosition.height;

//end creation svg

//etape 2
//creation de ciel 
  
      function Polygon() {
        
        var tabPoints = [];
        
        var j = 0, i = 0;
        
        console.log(arguments);


        this.node = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

        this.points = function () {
            
                    console.log(arguments);
                    
                      for ( ; i < arguments.length; i += 2) {
                      

                        tabPoints[j] = [arguments[i], arguments[i + 1]];
                        j += 1;
                  
                      }
                      
                  if (j > 2) {
                      
                       this.attribute('points', tabPoints );

                      
                      
                      
                      console.log('tabPoints est');
                      console.log(tabPoints);
                  }
          
        else {
          console.log('veuillez inserer au moins 3 points =>  arguments >= 6');

        }

       
                        console.log('j =  ' + j);
     }

        this.getPoint = function (i) {
          if ((i >= 0) && (i < j)) {
              return tabPoints[i]
          }

          else { console.log('Sorry le point  ' + i + '  n\'existe pas so we cant get it ')}
          
            
        };
      
        this.setPoint = function (i, x, y) {
                
                  if ((i >= 0) && (i < j)) {
                    tabPoints[i] = [x, y];
                    this.attribute('points', tabPoints);
                  } 
                  else { console.log('Le point ' + i + ' n\'existe pas so we cant set it')} 
        };  

        this.addPoint = function (i, x, y) {
         
          if ((i >= j) && (i < j + 1)){
            tabPoints[i] = [x, y];
            this.attribute('points', tabPoints);
            j += 1;

          }
        }   
                    



        // la func this.attribute  nous permet de modifier l'attribu de notre polygone
        this.attribute = function (key, val) {
                  if (val == undefined) {
                    
                    
                   return this.node.getAttribute(key);
                  }
                 
                  else {
                      
                      this.node.setAttribute(key, val);
                        
                        
                        console.log('key  :' + key + '    val = ' + val);
                  
                  }
                  
              };

        

        

        

        

        this.points.apply(this, arguments);
    }

    var ciel = new Polygon(0, 0, w_svgBnuit, 0, w_svgBnuit, h_svgBnuit, 0, h_svgBnuit );
    ciel.node.classList.add('ciel');
    console.log('hiiiiiiiiiiiiiiiiii');
    // console.log(ciel.node.attributes.fill.value);
    ciel.node.setAttribute('fill', '#0f0');
    
    ciel.node.setAttribute('width', w_svgBnuit);
   ciel.node.setAttribute('height', h_svgBnuit);
   
    

    

    //end creation ciel je dois revoir ce code

    //etape 3

   //creation d'une couleur dégradée (coucher de soleil) pour ciel 
   var defs = document.createElementNS("http://www.w3.org/2000/svg", 'defs');

   var linearGradient = document.createElementNS("http://www.w3.org/2000/svg", 'linearGradient');
   

   var stop0 = document.createElementNS("http://www.w3.org/2000/svg", 'stop');
   
   stop0.setAttribute('offset', '0%');
   stop0.setAttribute('stop-color', 'lightblue');
   stop0.setAttribute('stop-opacity', '.3');

   var stop1 = document.createElementNS("http://www.w3.org/2000/svg", 'stop');

   stop1.setAttribute('offset', '100%');
   stop1.setAttribute('stop-color', '#ef5b2b');
   stop1.setAttribute('stop-opacity', '.5');
   
  
   // copie d'un code

   var stops = [
    {
        "color": "#f00",
        "offset": "0%"
    },{
        "color": "#00f",
        "offset": "100%"
    }
];
   for (var i = 0; i < stops.length ; i++) {
      var stop = document.createElementNS("http://www.w3.org/2000/svg", 'stop');
     stop.setAttribute('offset', stops[i].offset);
    stop.setAttribute('stop-color', stops[i].color);

      linearGradient.appendChild(stop);
      



   }
   

   //end copie
   

  linearGradient.id = 'GradientCiel';
 
   linearGradient.setAttribute('x1', '0');
   linearGradient.setAttribute('y1', '0');
   linearGradient.setAttribute('x2', '0');
   linearGradient.setAttribute('y2', '1');

   defs.appendChild(linearGradient);
   svgBnuit.appendChild(defs);
   console.log(defs);





     
      console.log(ciel.node);

      ciel.node.setAttribute('fill', '#000');
       ciel.node.setAttribute('opacity', '0.01');


    
     
      
      svgBnuit.appendChild(ciel.node);

     
    


//etape 4

//creation des étoiles

// object circle1 doit avoir les arguments respectivement cx, cy, r


    var circle1 = new Circle( 500, 200, 0.05);
    circle1.node.setAttribute('opacity', 0.2);
    circle1.node.setAttribute('fill', '#fff');
    
    svgBnuit.appendChild(circle1.node);
    var comptEtoile = 0;

    






//creation d'un filter pour le soleil

var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter"); 
filter.id= 'blurME'; 

// creation d'un feGaussianBlur

var feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur"); 
//donner la valeur de l'attribut stdDeviation 
feGaussianBlur.setAttribute('stdDeviation', '10');
 //donner la valeur de l'attribu in c important pour appliquer l'effet filter
 // et faire apparaitre soleil.node
 feGaussianBlur.setAttribute('in', 'SourceGraphic');
 
 filter.appendChild(feGaussianBlur);
 svgBnuit.appendChild(filter);


//etape 5
 //creation d'un soleil
  
  var cxSoleil = w_svgBnuit / 2;
  var cySoleil = h_svgBnuit / 2;
  

  var soleil = new Circle(cxSoleil, cySoleil, 100);
  
// valeur du rayon soleil
  var rSoleil = parseInt(soleil.node.attributes.r.value);

  
    soleil.node.setAttribute('fill', 'orange');
    soleil.node.setAttribute('stroke-width', '1px');
    soleil.node.setAttribute('stroke', '#f30');
    soleil.node.setAttribute('filter', 'url(#blurME)');
    svgBnuit.appendChild(soleil.node);

    //end creation soleil


    //etape 6

    //creation de la lune

    var lune = new Circle(cxSoleil ,(rSoleil + 50) , 0.5 );
  
      lune.node.setAttribute('fill', '#fff');
      svgBnuit.appendChild(lune.node);
      var ryonLune = parseInt(lune.node.attributes.r.value); 
      var xLune = parseInt(lune.node.attributes.cx.value); 
      var yLune = parseInt(lune.node.attributes.cy.value); 

      



    //je vais jouer un peu
var cielJour = document.getElementById('cielJour');
var cielJourPosition = cielJour.getBoundingClientRect();
var w_cielJour = cielJourPosition.width;
var fill = cielJour.attributes.fill.value;

// cielJour.setAttribute('opacity', '.1');
var comptcielJ = 0, comptcielN = 0, rSoleil = 100;

//function de la belle nuit etaoilée
  
function cielJourDisparait(belleLune) {

    soleil.node.setAttribute('cx', cxSoleil );
    soleil.node.setAttribute('cy', cySoleil );
     soleil.node.setAttribute('r', rSoleil );

   cielJour.setAttribute('opacity', 1 - (comptcielJ  / 100));
    ciel.node.setAttribute('opacity', .9 * ((comptcielJ * 1.3) / 100));
   comptcielJ ++; cxSoleil += 5; cySoleil -= 3; rSoleil -= 2;

   if (rSoleil > -1) { setTimeout( cielJourDisparait, 200)}


     else {


         function etoile() {
                  var c = circle1.node.cloneNode(true);
                  c.setAttribute('r', '2px');
                  c.setAttribute("cx", Math.random() * 800);
                  c.setAttribute("cy", Math.random() * 400);
                  c.setAttribute('opacity', (.6 + comptEtoile /100));
                  c.style.transition = 'opacity .5s cubic-bezier(.02,.71,.93,.05)';
                  svgBnuit.appendChild(c);

                  comptEtoile ++;
                  if (comptEtoile < 100) { setTimeout(etoile, 100)}



                    else {

                          function belleLune() {
      

                              lune.node.setAttribute('r', ryonLune);
                              lune.node.setAttribute('cx', xLune);
                              lune.node.setAttribute('cx', yLune);

                              lune.node.setAttribute('transition', 'r 10s cubic-bezier(.02,.71,.93,.05)' );
                               ryonLune ++; xLune ++; yLune ++;

                              if(ryonLune < 50) {setTimeout(belleLune, 100)}


    };
belleLune();

    }


    }
    etoile();

     }
     
  


}
cielJourDisparait();




