/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript */
function ListenerClick(evt)
{
	//alert(evt.clientX + ':' + evt.clientY);
	if (!choosingAPiece)
	{
		xStartDrag=evt.clientX;
		yStartDrag=evt.clientY;
		choosingAPiece=true;
	}else
	{
		xEndDrag=evt.clientX;
		yEndDrag=evt.clientY;
		alert('startx '+ Math.floor(xStartDrag/sizeOfSquare) + 'starty ' + Math.floor(yStartDrag/sizeOfSquare) + 'endx ' + Math.floor(xEndDrag/sizeOfSquare) + 'endy ' + Math.floor(yEndDrag/sizeOfSquare));
		choosingAPiece=false;
	}
	
	
}
var choosingAPiece= new Boolean();
choosingAPiece=false;
var xEndDrag;
var yStartDrag;
var yEndDrag;
function ListenerDragLeave(evt)
{
	
	xEndDrag=evt.clientX;
	yEndDrag=evt.clientY;
	
}
//document.getElementById('svgOne').setAttribute('width',window.innerHeight);
//document.getElementById('svgOne').setAttribute('height',window.innerHeight);
var sizeOfSquare;//=document.getElementById('svgOne').getAttribute('height');
var numberOfSquares=8;
console.log('after ');
function Piece()
{
	this.locationX;
	this.locationY;
	this.imageOfPiece = new Image();
	
	this.isWhite = new Boolean();
	this.isWhite=true;
	this.isValid = new Boolean();
	
	console.log("finished Piece consturctor");
	
}
Piece.prototype.canMove = function(x,y)
{
	
};
Piece.prototype.drawPiece = function(x,y)
{
	this.locationX=x;
	this.locationY=y;
	
	var try12 = document.createElementNS(svgns, 'image');
   console.log("after var try12");
   	try12.setAttributeNS(null,'x', Math.floor(this.locationY*sizeOfSquare));
   	try12.setAttributeNS(null,'y', Math.floor(this.locationX*sizeOfSquare));
   	
   	try12.setAttributeNS('http://www.w3.org/1999/xlink','href', this.imageOfPiece.src);
   	try12.setAttributeNS(null, 'height', sizeOfSquare);
   	try12.setAttributeNS(null, 'width', sizeOfSquare);
   	
   	//try12.addEventListener("dragstart",ListenerDragStart,false);
   	//try12.addEventListener("dragleave",ListenerDragLeave,false);
   	//try12.addEventListener("dragend",function (evt){alert ('start ' + xStartDrag + ' :' + 'end' + xEndDrag + 'ystart' + yStartDrag +':'+'yend'+yEndDrag);},false);
   	
   	//try12.addEventListener("click",function(evt){alert('x'+ evt.clientX +':' +'y' + evt.clientY);});
   	document.getElementById('svgOne').appendChild(try12);
   	
	
};



function Pawn (colorOfPiece){
	Piece.call(this);
    this.isWhite=colorOfPiece;
	this.locationX;
	this.locationY;
	
	this.firstMove = new Boolean();
	this.firstMove=true;
	if (this.isWhite)
	{
		this.imageOfPiece.src = "wpawn.gif";
		
	}else
	{
		this.imageOfPiece.src = "bpawn.gif";
		
	}
	
}
Pawn.prototype = new Piece();
Pawn.prototype.constructor = Pawn;
Pawn.prototype.canMove = function(x,y) 
{
	
	this.isValid=false;
	if (this.isWhite)
        {
           
       
            if (y == ((this.locationY/sizeOfSquare)-2) && x==this.locationX/sizeOfSquare)
            {
                if (this.firstMove)
                {
                    if (typeof positions[y][x]=='undefined')
                    {
                       
                            this.firstMove=false;
                            this.isValid=true;
                       
                    }
                }
           
            }else if (y == ((this.locationY/sizeOfSquare)-1) && x==this.locationX/sizeOfSquare)
            {
                if (typeof positions[y][x]=='undefined')
                {
                   
                        this.firstMove=false;
                        this.isValid=true;
                   
                }
            }else if(y == ((this.locationY/sizeOfSquare)-1) && Math.abs(x-(this.locationX/sizeOfSquare))==1)
                    {
                        if (typeof positions[y][x]!='undefined')
                        {
                            if (this.isWhite!=positions[y][x].isWhite)
                            {
                                this.firstMove=false;
                                this.isValid=true;
                            }
                        }
                    }
        }else
        {
            if (y == ((this.locationY/sizeOfSquare)+2) && x==this.locationX/sizeOfSquare)
            {
                if (this.firstMove)
                {
                    if (typeof positions[y][x]=='undefined')
                    {
                       
                            this.firstMove=false;
                            this.isValid=true;
                       
                    }
                }
           
            }else if (y == ((this.locationY/sizeOfSquare)+1) && x==this.locationX/sizeOfSquare)
            {
                if (typeof positions[y][x]=='undefined')
                {
                   
                        this.firstMove=false;
                        this.isValid=true;
                   
                }
            }else if(y == ((this.locationY/sizeOfSquare)+1) && Math.abs(x-(this.locationX/sizeOfSquare))==1)
            {
                if (typeof positions[y][x]!='undefined')
                {
                   
               
                    if (this.isWhite!=positions[y][x].isWhite)
                    {
                        this.firstMove=false;
                        this.isValid=true;
                    }
                }
            }
        }	
        return this.isValid;
	console.log("inside pawn canMove");
};
/*Pawn.prototype.drawPiece = function(x,y) 
{
	console.log("inside drawPiece Pawn"+x+y)
	
	
};*/

function Knight (colorOfPiece){
	Piece.call(this);
	console.log("inside Kinght");
    this.isWhite=colorOfPiece;
	this.locationX;
	this.locationY;
	if (this.isWhite)
	{
		this.imageOfPiece.src = "wknight.gif";
		
	}else
	{
		this.imageOfPiece.src = "bknight.gif";
		
	}
}
Knight.prototype = new Piece();
Knight.prototype.constructor = Knight;
Knight.prototype.canMove = function()
{
	
}
/*Knight.prototype.drawPiece =function()
{
	
}*/

function Bishop(colorOfPiece){
	Piece.call(this);
	this.isWhite=colorOfPiece;
	this.locationX;
	this.locationY;
	if (this.isWhite)
	{
		this.imageOfPiece.src = "wbishop.gif";
		
	}else
	{
		this.imageOfPiece.src = "bbishop.gif";
		
	}
}
Bishop.prototype = new Piece();
Bishop.prototype.constructor=Bishop;
Bishop.prototype.canMove = function()
{
	
}
/*Bishop.prototype.drawPiece = function()
{
	
}*/

function Rook (colorOfPiece){
	Piece.call(this);
	this.isWhite=colorOfPiece;
	this.locationX;
	this.locationY;
	if (this.isWhite)
	{
		this.imageOfPiece.src = "wrook.gif";
		
	}else
	{
		this.imageOfPiece.src = "brook.gif";
		
	}
}
Rook.prototype= new Piece();
Rook.prototype.constructor = Rook;
Rook.prototype.canMove = function()
{
	
}
/*Rook.prototype.drawPiece = function()
{
	
}*/

function Queen (colorOfPiece){
	Piece.call(this);
	this.isWhite=colorOfPiece;
	this.locationX;
	this.locationY;
	if (this.isWhite)
	{
		this.imageOfPiece.src = "wqueen.gif";
		
	}else
	{
		this.imageOfPiece.src = "bqueen.gif";
		
	}
}
Queen.prototype = new Piece();
Queen.prototype.constructor=Queen;
Queen.prototype.canMove = function()
{
	
}
/*Queen.prototype.drawPiece = function  () {
  
}*/

function King (colorOfPiece)
{
	Piece.call(this);
	this.isWhite=colorOfPiece;
	this.locationX;
	this.locationY;
	if (this.isWhite)
	{
		this.imageOfPiece.src = "wking.gif";
		
	}else
	{
		this.imageOfPiece.src = "bking.gif";
		
	}
}
King.prototype = new Piece();
King.prototype.constructor=King;
King.prototype.canMove = function()
{
	
}/*
King.prototype.drawPiece = function()
{
	
}*/
var positions=new Array(8)
for (var i=0; i <8; i++){
	positions[i]=new Array(8)	
}

var xStartDrag;

function drawRect()
{
	console.log("first step");
	var piecesInitArray= ['Rook','Bishop','knight','Queen','King','Knight','Bishop','Rook'];
	var colorOfSquare= new Boolean();
	colorOfSquare=false;
	var colorOfPiece1 = new Boolean();
	colorOfPiece1=false;
	document.getElementById('svgOne').setAttribute('width',800);
	document.getElementById('svgOne').setAttribute('height',800);
	sizeOfSquare=Math.floor((document.getElementById('svgOne').getAttribute('height')-2)/(numberOfSquares));
	console.log(sizeOfSquare);
	/*var c=document.getElementById("svgOne");
	var ctx=c.getContext("2d");*/
	/*ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight ;*/
		
  	
  	
  	positions[0][0] = new Rook(colorOfPiece1);
  	positions[0][1] = new Bishop(colorOfPiece1);
  	positions[0][2] = new Knight(colorOfPiece1);
  	positions[0][3] = new Queen(colorOfPiece1);
  	positions[0][4] = new King(colorOfPiece1);
  	positions[0][5] = new Knight(colorOfPiece1);
  	positions[0][6] = new Bishop(colorOfPiece1);
  	positions[0][7] = new Rook(colorOfPiece1);
  
  	for (var i=0;i<numberOfSquares;i++)
  	{
  		 
  		positions[1][i] = new Pawn (colorOfPiece1);
  		
  		
  		positions[6][i] = new Pawn (!colorOfPiece1);
  	}
  	positions[7][0] = new Rook(!colorOfPiece1);
  	positions[7][1] = new Bishop(!colorOfPiece1);
  	positions[7][2] = new Knight(!colorOfPiece1);
  	positions[7][3] = new Queen(!colorOfPiece1);
  	positions[7][4] = new King(!colorOfPiece1);
  	positions[7][5] = new Knight(!colorOfPiece1);
  	positions[7][6] = new Bishop(!colorOfPiece1);
  	positions[7][7] = new Rook(!colorOfPiece1);
  	
  	console.log("class instance");
  	
  	console.log (positions[0][0]);
  	
  	var checking = positions[6][0].canMove(0,4);
  	console.log(checking);
  	/*myPiece.piece1 = new Image();*/
  	/*myPiece.imageOfPiece.src="bbishop.gif";*/
  	svgns = "http://www.w3.org/2000/svg";
for (var x = 0; x < numberOfSquares; x++) {
	
	if (x % 2 == 0 )
  	{
  		
  		colorOfSqaure=false;
  		
  	}else 
  	{
  		console.log("red" );
  		colorOfSquare=true;
  	}	
  	console.log('size of square' + sizeOfSquare)
    for (var y = 0; y < numberOfSquares; y++) {
    	if (colorOfSquare==true)
    		{
    			
    			var rect = document.createElementNS(svgns, 'rect');
        		rect.setAttributeNS(null, 'x', Math.floor(x*sizeOfSquare));
        		rect.setAttributeNS(null, 'y', Math.floor(y*sizeOfSquare));
        		rect.setAttributeNS(null, 'height', sizeOfSquare);
        		rect.setAttributeNS(null, 'width', sizeOfSquare);
        		rect.setAttributeNS(null, 'fill', '#FFFFFF');
        		//rect.addEventListener("click",function(evt){alert('x'+ evt.screenX +':' +'y' + evt.clientY););
        		document.getElementById('svgOne').appendChild(rect);
        		colorOfSquare=false;	
    	}else
    	{
    		var rect = document.createElementNS(svgns, 'rect');
        	rect.setAttributeNS(null, 'x', Math.floor(x*sizeOfSquare));
        	rect.setAttributeNS(null, 'y', Math.floor(y*sizeOfSquare));
        	rect.setAttributeNS(null, 'height', sizeOfSquare);
        	rect.setAttributeNS(null, 'width', sizeOfSquare);
        	rect.setAttributeNS(null, 'fill', '#FF0000');
        	//rect.addEventListener("click",function(evt){alert('x'+ evt.clientX +':' +'y' + evt.clientY););
        	document.getElementById('svgOne').appendChild(rect);
        	colorOfSquare=true;	
    	}
        
    }
    colorOfSquare=false;
   }
   for (var numberOfRow=0;numberOfRow<numberOfSquares;numberOfRow++)
   {
   		for (var locationInRow=0;locationInRow<numberOfSquares;locationInRow++)
   		{
   			if (typeof positions[numberOfRow][locationInRow]!='undefined')
   			{
   				console.log("inside drawing pices")
   				positions[numberOfRow][locationInRow].drawPiece(numberOfRow,locationInRow);
   				/*var try12 = document.createElementNS(svgns, 'image');
   
   				try12.setAttributeNS(null,'x', locationInRow*sizeOfSquare);
   				try12.setAttributeNS(null,'y', numberOfRow*sizeOfSquare);
   				try12.setAttributeNS('http://www.w3.org/1999/xlink','href', positions[numberOfRow][locationInRow].imageOfPiece.src);
   				try12.setAttributeNS(null, 'height', sizeOfSquare);
   				try12.setAttributeNS(null, 'width', sizeOfSquare);
   				document.getElementById('svgOne').appendChild(try12);*/
   			}
   			
   		}
   }
   
   //document.getElementById('svgOne').addEventListener("ondragstart",function(evt){xStartDrag=evt.clientX},false);
   document.getElementById('svgOne').addEventListener("click",ListenerClick,false);
   
   
  /*  for (var numberOfRows=0;numberOfRows<numberOfSquares;numberOfRows++)
  {
  	
  	console.log(numberOfRows%2);
  	if (numberOfRows % 2 == 0 )
  	{
  		console.log("hi "+ numberOfRows % 2);
  		colorOfSqaure=false;
  		
  	}else 
  	{
  		console.log("red" );
  		colorOfSquare=true;
  	}	
  	
  	for (var locationInRow=0;locationInRow<numberOfSquares;locationInRow++)
  	{
  		console.log(colorOfSquare);
  		if (colorOfSquare==true)
  		{
  			
  			ctx.fillStyle="#FF0000";
  			ctx.fillRect(locationInRow*sizeOfSquare,numberOfRows*sizeOfSquare,sizeOfSquare,sizeOfSquare);
  			colorOfSquare=false;
  		}else
  		{
  			console.log(locationInRow);
  			ctx.fillStyle="#000000";
  			ctx.fillRect(locationInRow*sizeOfSquare,numberOfRows*sizeOfSquare,sizeOfSquare,sizeOfSquare);
  			colorOfSqaure=true;
  		}
  			
  			
  		
  		
  		
  	}
  	colorOfSqaure=false;
  }*/
	/*ctx.fillRect(0,0,100,100);
	ctx.fillRect(100,100,100,100);
	ctx.fillRect(0,200,100,100);*/
	
	
	
}


function  myFunction()
{
	
	document.getElementById("demo").innerHTML="change is good";
	
	
}


