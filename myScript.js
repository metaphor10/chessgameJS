/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript */

var whosTurnItIs = new Boolean();
var possibleMoves= new Array();
function ArtificialInteligence()
{
	this.pieceToMoveX;
	this.pieceToMoveY;
	this.possibleMoveX;
	this.possibleMoveY;
	this.valueOfPiece;
}
function ListenerClick(evt)
{
	console.log('inside click listner');
	var moveToDo;
	var x;
	var y;
	var valueOfPiece=0;
	var temp;
	var temp1;
	var endX;
	var endY;
	
	
	//alert(evt.clientX + ':' + evt.clientY);
	if (!choosingAPiece)
	{
		
		
		yStartDrag=Math.floor(evt.clientY/sizeOfSquare);
		xStartDrag=Math.floor(evt.clientX/sizeOfSquare);
		if (positions[yStartDrag][xStartDrag]!=undefined)
		{
			choosingAPiece=true;
		}
		
		
	}else
	{
		/*xEndDrag=evt.clientX;
		yEndDrag=evt.clientY;
		var startX = Math.floor(xStartDrag/sizeOfSquare);
		var startY = Math.floor(yStartDrag/sizeOfSquare);
		var endX= Math.floor(xEndDrag/sizeOfSquare);
		var endY= Math.floor(yEndDrag/sizeOfSquare);
		alert('startx '+ Math.floor(xStartDrag/sizeOfSquare) + 'starty ' + Math.floor(yStartDrag/sizeOfSquare) + 'endx ' + Math.floor(xEndDrag/sizeOfSquare) + 'endy ' + Math.floor(yEndDrag/sizeOfSquare));
		if ((positions[startY][startX].canMove(endX,endY))==true)
		{
			temp=positions[startY][startX];
			positions[startY][startX]=undefined; 
			positions[endY].splice(endX,1, temp);
			drawBoard();
		
		}*/
		xEndDrag=evt.clientX;
		yEndDrag=evt.clientY;
		endX= Math.floor(xEndDrag/sizeOfSquare);
		endY= Math.floor(yEndDrag/sizeOfSquare);
		
		
		
		drawBoard();
		
		if ( positions[yStartDrag][xStartDrag]!=undefined)
                {
                console.log('inside piece place');
                if (endX!=x || (endY)!= y)
                {
                        //if (endX>= 0 && (endX)< numberOfSquares && (endY) >= 0 &&(endY< numberOfSquares))
                        //{
                        
                       
                                if (positions[yStartDrag][xStartDrag].isWhite==whosTurnItIs)
                                {
                                        if (positions[yStartDrag][xStartDrag].canMove(endX, endY))
                                        {
                                                
                                               /* if (positions[Math.round(evt.clientY/sizeOfSquare)][Math.round(evt.clientX/sizeOfSquare)]!=undefined)
                                                {
                                                        valueOfPiece=positions[Math.round(evt.clientY/sizeOfSquare)][Math.round(evt.cloentX/sizeOfSquare)].valueOfPiece;
                                                }*/
                                                
                                                temp = positions[yStartDrag][xStartDrag];
                                                
                                               
												positions[yStartDrag][xStartDrag]=undefined; 
												
												positions[endY].splice(endX,1, temp);
												
                                                /*if(valueOfPiece==6)
                                                {
                                                        //this is where I would exit if the king was taken
                                                }*/
                                                
                                                whosTurnItIs = !positions[endY][endX].isWhite;
                                                
                                                
                                                drawBoard();
                                                /*
                                              	if (whosTurnItIs)
												{
													document.getElementById("demo").innerHTML="White";
												}else
												{
													document.getElementById("demo").innerHTML="Black";
												}
												
                                                for (var y1 = 0 ;y1<numberOfSquares;y1++)
                                                {
                                                        for (var i =0;i<numberOfSquares;i++)
                                                        {
                                                                if (positions[y1][i]!=undefined)
                                                                {
                                                                        if (positions[y1][i].isWhite==false)
                                                                        {
                                                                                for (var j =0;j< numberOfSquares;j++)
                                                                                {
                                                                                        for (var u =0; u<numberOfSquares;u++)
                                                                                        {
                                                                                                if (positions[y1][i].canMove(u, j))
                                                                                                {
                                                                                                        var temp1 = new ArtificialInteligence();
                                                                                                        if (positions[j][u]!=undefined)
                                                                                                        {
                                                                                                                temp1.pieceToMoveX=i;
                                                                                                                temp1.pieceToMoveY=y1;
                                                                                                                temp1.possibleMoveX=u;
                                                                                                                temp1.possibleMoveY=j;
                                                                                                                temp1.valueOfPiece=positions[j][u].valueOfPiece;
                                                                                                                
                                                                                                                
                                                                                                        }else
                                                                                                        {
                                                                                                                temp1.pieceToMoveX=i;
                                                                                                                temp1.pieceToMoveY=y1;
                                                                                                                temp1.possibleMoveX=u;
                                                                                                                temp1.possibleMoveY=j;
                                                                                                        }
                                                                                                        possibleMoves.push(temp1);
                                                                                                        temp1=undefined;
                                                                                                }
                                                                                        }
                                                                                }
                                                                        }
                                                                                        
                                                                }
                                                        }
                                                                        
                                                }
                                                
                                                
                                                moveToDo = Math.floor((Math.random()*(possibleMoves.length)));
                                                
                                                var temp2 = positions[possibleMoves[moveToDo].pieceToMoveY][possibleMoves[moveToDo].pieceToMoveX];
                                                positions[possibleMoves[moveToDo].pieceToMoveY][possibleMoves[moveToDo].pieceToMoveX]=undefined; 
												positions[possibleMoves[moveToDo].possibleMoveY].splice(possibleMoves[moveToDo].possibleMoveX,1, temp2);
												
												
												
												drawBoard();
                                               
                                                whosTurnItIs = !positions[possibleMoves[moveToDo].possibleMoveY][possibleMoves[moveToDo].possibleMoveX].isWhite;
                                               	if (whosTurnItIs)
												{
													document.getElementById("demo").innerHTML="White";
												}else
												{
													document.getElementById("demo").innerHTML="Black";
												}
                                                possibleMoves.length=0;
                                                */
                                               if (whosTurnItIs)
												{
													document.getElementById("demo").innerHTML="White";
												}else
												{
													document.getElementById("demo").innerHTML="Black";
												}
												
												drawBoard();
												
                                               setTimeout("AI()",3000);
                                        }
                                }
                        //}
                }
                choosingAPiece=false;
                }else
                {
                	
                	choosingAPiece=true;
                	whosTurnItIs=false;
;                }
                
                
                


		
		
		
		/*for (var i=65;i<childNodeArray.length;i++)
		{
			
			alert(childNodeArray[i].y);
			
				
			
			
		}*/
		
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

function Piece()
{
	this.locationX;
	this.locationY;
	this.imageOfPiece = new Image();
	
	this.isWhite = new Boolean();
	this.isWhite=true;
	this.isValid = new Boolean();
	this.isValid=false;
	this.isOccupiedByOppsitPiece = new Boolean();
	this.isOccupiedByOppsitPiece = true;
	
	
	
	
}
Piece.prototype.canMove = function(x,y)
{
	return;
};
Piece.prototype.drawPiece = function(x,y)
{
	this.locationX=x;
	this.locationY=y;
	
	var try12 = document.createElementNS(svgns, 'image');
   console.log("after var try12");
   	try12.setAttributeNS(null,'x', Math.floor(this.locationX*sizeOfSquare));
   	try12.setAttributeNS(null,'y', Math.floor(this.locationY*sizeOfSquare));
   	
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
           console.log('inside isWhite');
       		console.log(this.locationY +' '+  +' '+ y )
            if (y == (Math.round((this.locationY)-2)) && x==Math.round(this.locationX))
            {
            	console.log('first move');
                if (this.firstMove)
                {
                    if (typeof positions[y][x]=='undefined')
                    {
                       
                            this.firstMove=false;
                            this.isValid=true;
                       
                    }
                }
           
            }else if (y == ((this.locationY)-1) && x==this.locationX)
            {
                if (typeof positions[y][x]=='undefined')
                {
                   
                        this.firstMove=false;
                        this.isValid=true;
                   
                }
            }else if(y == ((this.locationY)-1) && Math.abs(x-(this.locationX))==1)
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
        }else // if the piece moving is black
        {
            if (y == ((this.locationY)+2) && x==this.locationX)
            {
                if (this.firstMove)
                {
                    if (typeof positions[y][x]=='undefined')
                    {
                       
                            this.firstMove=false;
                            this.isValid=true;
                       
                    }
                }
           
            }else if (y == ((this.locationY)+1) && x==this.locationX)
            {
                if (typeof positions[y][x]=='undefined')
                {
                   
                        this.firstMove=false;
                        this.isValid=true;
                   
                }
            }else if(y == ((this.locationY)+1) && Math.abs(x-(this.locationX))==1)
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
	
};
/*Pawn.prototype.drawPiece = function(x,y) 
{
	console.log("inside drawPiece Pawn"+x+y)
	
	
};*/

function Knight (colorOfPiece){
	Piece.call(this);
	
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
Knight.prototype.canMove = function(x,y)
{
	
	this.isValid = false;
                if (Math.abs(x-(this.locationX))==1 && Math.abs(y-(this.locationY))==2)
                {
                        this.isValid=true;
                        
                }else if (Math.abs(y-(this.locationY))==1 && Math.abs(x-(this.locationX))==2)
                {
                        this.isValid=true;
                }
                
                if (this.isValid)
                {
                        if ( positions[y][x]!=undefined)                                
                        {
                                if (this.isWhite==positions[y][x].isWhite)
                                {
                                        this.isValid=false;
                                }
                                
                        }
                }
                
                return this.isValid;
	
}
/*Knight.prototype.drawPiece =function()
{
	
}*/

function Bishop(colorOfPiece){
	Piece.call(this);
	this.diagnolY =0;
	this.digonlX =0;
	this.dx=1;
	this.dy=1;
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
Bishop.prototype.canMove = function(x,y)
{
	this.isOccupiedByOppsitPiece=true;
	this.isValid=false;
	if (Math.abs(x-(this.locationX)) == Math.abs(y-(this.locationY)))
                {
                	console.log('inside Bishop can move dignal'+this.diagnolY+this.digonlX);
                	
                        this.isValid=true;
                
                
                if (x < (this.locationX))
                {
                        
                        this.digonlX = this.locationX-1;
                        this.dx=-1;
                        
                }else
                {
                        
                        
                        this.digonlX = (this.locationX)+1;
                        this.dx=1;
                }
                if (y< (this.locationY))
                {
                        
                        this.diagnolY = this.locationY-1;
                        this.dy=-1;
                }else
                {
                        
                        this.diagnolY= (this.locationY)+1;
                        this.dy=1;
                }
                
                for (var i=0;i<Math.abs(x-(this.locationX))-1;i++)
                {
                        
                        if ( positions[this.diagnolY][this.digonlX]!=undefined)
                        {                                        
                                        this.isValid=false;                                
                        }
                        
                        this.digonlX+=this.dx;
                        this.diagnolY+=this.dy;
                        
                }
                
                }
                if ( positions[y][x] != undefined)
                {
                        if (positions[y][x].isWhite==this.isWhite)
                        {
                                this.isOccupiedByOppsitPiece=false;
                        }
                }
                        
                
                if (this.isValid && this.isOccupiedByOppsitPiece)
                {
                        return true;
                }else
                {
                        return false;
                }
	
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
Rook.prototype.canMove = function(x,y)
{
	var followUp;
	this.isOccupiedByOppsitPiece=true;
	this.isValid=false;
	if (x!=(this.locationX) && y== (this.locationY))
                {
                        this.isValid=true;
                        if (x<=this.locationX)
                        {
                                followUp=x+1;
                        }else
                        {
                                followUp=(this.locationX)+1;
                        }
                        for (var i=0;i<Math.abs(x-(this.locationX))-1;i++)
                        {
                                if (positions[y][followUp]!=undefined)
                                {
                                                                
                                                this.isValid = false;                                        
                                }
                                followUp++;
                        }
                        if ( positions[y][x] !=undefined)
                        {
                                if (positions[y][x].isWhite== this.isWhite)
                                {
                                        this.isOccupiedByOppsitPiece = false;
                                }
                        }
                        
                        
                }else if (y!=(this.locationY) && x == (this.locationX))
                        {
                                this.isValid=true;
                                if (y<=this.locationY)
                                {
                                        followUp=y+1;
                                        
                                }else
                                {
                                        followUp=(this.locationY)+1;
                                }
                                for (var i=0;i<Math.abs(y-(this.locationY))-1;i++)
                                {
                                        if (positions[followUp][x]!=undefined)
                                        {
                                                        this.isValid = false;                                                                                        
                                        }
                                        followUp++;
                                }
                                if ( positions[y][x] !=undefined)
                                {
                                        if (positions[y][x].isWhite== this.isWhite)
                                        {
                                                this.isOccupiedByOppsitPiece = false;
                                        }
                                }
                                
                                
                        }
                
                if (this.isValid&&this.isOccupiedByOppsitPiece)
                {
                        return true;
                }else
                {
                        return false;
                }
	
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
Queen.prototype.canMove = function(x,y)
{
	var followUp;
	var digonlX;
	var diagnolY;
	var dx=1;
	var dy=1;
	this.isOccupiedByOppsitPiece = true;
                this.isValid = false;
                if (Math.abs(x-(this.locationX)) == Math.abs(y-(this.locationY)))
                {
                        this.isValid=true;
                        if (x <= (this.locationX))
                        {
                                
                                digonlX = this.locationX-1;
                                dx=-1;
                                
                        }else
                        {
                                
                                
                                digonlX = (this.locationX)+1;
                        }
                        if (y<=(this.locationY))
                        {
                                
                                diagnolY = this.locationY-1;
                                dy=-1;
                        }else
                        {
                                
                                diagnolY= (this.locationY)+1;
                        }
                        for (var i=0;i<Math.abs(x-(this.locationX))-1;i++)
                        {
                                
                                if (positions[diagnolY][digonlX]!=undefined)
                                {                                        
                                                this.isValid=false;                                
                                }
                                
                                digonlX+=dx;
                                diagnolY+=dy;
                                
                        }
                        if (positions[y][x] != undefined)
                        {
                                if (positions[y][x].isWhite==this.isWhite)
                                {
                                        this.isOccupiedByOppsitPiece=false;
                                }
                        }
                }else if (x!=(this.locationX) && y== (this.locationY))
                                {
                        this.isValid=true;
                        if (x<=this.locationX)
                        {
                                followUp=x+1;
                        }else
                        {
                                followUp=(this.locationX)+1;
                        }
                        for (var i=0;i<Math.abs(x-(this.locationX))-1;i++)
                        {
                                if (positions[y][followUp]!=undefined)
                                {
                                                                
                                                this.isValid = false;                                        
                                }
                                followUp++;
                        }
                        if ( positions[y][x] !=undefined)
                        {
                                if (positions[y][x].isWhite== this.isWhite)
                                {
                                        this.isOccupiedByOppsitPiece = false;
                                }
                        }
                        
                                }else if (y!=(this.locationY) && x == (this.locationX))
                                        {
                                        this.isValid=true;
                                        if (y<=this.locationY)
                                        {
                                                followUp=y+1;
                                                
                                        }else
                                        {
                                                followUp=(this.locationY)+1;
                                        }
                                        for (var i=0;i<Math.abs(y-(this.locationY))-1;i++)
                                        {
                                                if (positions[followUp][x]!=undefined)
                                                {
                                                                this.isValid = false;                                                                                        
                                                }
                                                followUp++;
                                        }
                                        if (positions[y][x] !=undefined)
                                        {
                                                if (positions[y][x].isWhite== this.isWhite)
                                                {
                                                        this.isOccupiedByOppsitPiece = false;
                                                }
                                        }
                                        
                                        }
                
              
                if(this.isValid&&this.isOccupiedByOppsitPiece)
                {
                        return true;
                }else
                {
                        return false;
                }
	
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
King.prototype.canMove = function(x,y)
{
	this.isOccupiedByOppsitPiece=true;
	this.isValid=false;
	console.log('is oddumpied'+ this.isOccupiedByOppsitPiece)
	if (Math.abs(y-(this.locationY))==0 && Math.abs(x-(this.locationX))==1)
                {
                        this.isValid = true;
                }else if (Math.abs(y-(this.locationY))==1 && Math.abs(x-(this.locationX))==0)
                        {
                                this.isValid = true;
                        }else if (Math.abs(y-(this.locationY))==1 && Math.abs(x-(this.locationX))==1)
                                {
                                        this.isValid = true;
                                }
                
                if (positions[y][x] !=undefined)
                {
                        if(positions[y][x].isWhite==this.isWhite)
                        {
                                this.isOccupiedByOppsitPiece = false;
                        }
                }
                
                
                
                
                if (this.isValid&&this.isOccupiedByOppsitPiece)
                {
                        return true;
                }else
                {
                        return false;
                }
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
	

	var piecesInitArray= ['Rook','Bishop','knight','Queen','King','Knight','Bishop','Rook'];
	var colorOfSquare= new Boolean();
	colorOfSquare=false;
	var colorOfPiece1 = new Boolean();
	colorOfPiece1=false;
	document.getElementById('svgOne').setAttribute('width', window.innerHeight);
	document.getElementById('svgOne').setAttribute('height',window.innerHeight);
	document.getElementById('demo').style.position="absolute";
	document.getElementById('demo').style.top="0px";
	document.getElementById('demo').style.left="1000px";
	
	
	sizeOfSquare=Math.floor((document.getElementById('svgOne').getAttribute('height'))/(numberOfSquares));
	
	/*var c=document.getElementById("svgOne");
	var ctx=c.getContext("2d");*/
	/*ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight ;*/
		
  	//alert(document.getElementById('svgOne').getAttribute('height'));
  	whosTurnItIs=true;
  	positions[0][0] = new Rook(colorOfPiece1);
  	positions[0][1] = new Knight(colorOfPiece1);
  	positions[0][2] = new Bishop(colorOfPiece1);
  	positions[0][3] = new Queen(colorOfPiece1);
  	positions[0][4] = new King(colorOfPiece1);
  	positions[0][5] = new Bishop(colorOfPiece1);
  	positions[0][6] = new Knight(colorOfPiece1);
  	positions[0][7] = new Rook(colorOfPiece1);
  
  	for (var i=0;i<numberOfSquares;i++)
  	{
  		 
  		positions[1][i] = new Pawn (colorOfPiece1);
  		
  		
  		positions[6][i] = new Pawn (!colorOfPiece1);
  	}
  	positions[7][0] = new Rook(!colorOfPiece1);
  	positions[7][1] = new Knight(!colorOfPiece1);
  	positions[7][2] = new Bishop(!colorOfPiece1);
  	positions[7][3] = new Queen(!colorOfPiece1);
  	positions[7][4] = new King(!colorOfPiece1);
  	positions[7][5] = new Bishop(!colorOfPiece1);
  	positions[7][6] = new Knight(!colorOfPiece1);
  	positions[7][7] = new Rook(!colorOfPiece1);
  	
  	
  	
  	
  	
  	
  	
  	/*myPiece.piece1 = new Image();*/
  	/*myPiece.imageOfPiece.src="bbishop.gif";*/
  	/*svgns = "http://www.w3.org/2000/svg";
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
   				/*
   			}
   			
   		}
   }
   
   //document.getElementById('svgOne').addEventListener("ondragstart",function(evt){xStartDrag=evt.clientX},false);
 
 	 document.getElementById('svgOne').addEventListener("click",ListenerClick,false);*/
 	   //document.getElementById('svgOne').addEventListener("click",ListenerClick,false);
   
   
   drawBoard();
   
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
function drawBoard()
{
	
	svgns = "http://www.w3.org/2000/svg";
	
	document.getElementById('svgOne').setAttribute('width', window.innerHeight);
	document.getElementById('svgOne').setAttribute('height',window.innerHeight);
	var colorOfSquare= new Boolean();
	colorOfSquare=false;
	var colorOfPiece1 = new Boolean();
	colorOfPiece1=false;
	
	for (var y = 0; y < numberOfSquares; y++) {
	
	if (y % 2 == 0 )
  	{
  		
  		colorOfSqaure=false;
  		
  	}else 
  	{
  		
  		colorOfSquare=true;
  	}	
  	
    for (var x = 0; x < numberOfSquares; x++) {
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
   				
   				 positions[numberOfRow][locationInRow].drawPiece(locationInRow,numberOfRow);
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
}


function  myFunction()
{
	
	document.getElementById("demo").innerHTML="change is good";
	
	
}
function AI()
{
	var moveToDo;
    for (var y1 = 0 ;y1<numberOfSquares;y1++)
    {
            for (var i =0;i<numberOfSquares;i++)
            {
                    if (positions[y1][i]!=undefined)
                    {
                            if (positions[y1][i].isWhite==false)
                            {
                                    for (var j =0;j< numberOfSquares;j++)
                                    {
                                            for (var u =0; u<numberOfSquares;u++)
                                            {
                                                    if (positions[y1][i].canMove(u, j))
                                                    {
                                                            var temp1 = new ArtificialInteligence();
                                                            if (positions[j][u]!=undefined)
                                                            {
                                                                    temp1.pieceToMoveX=i;
                                                                    temp1.pieceToMoveY=y1;
                                                                    temp1.possibleMoveX=u;
                                                                    temp1.possibleMoveY=j;
                                                                    temp1.valueOfPiece=positions[j][u].valueOfPiece;
                                                                    
                                                                    
                                                            }else
                                                            {
                                                                    temp1.pieceToMoveX=i;
                                                                    temp1.pieceToMoveY=y1;
                                                                    temp1.possibleMoveX=u;
                                                                    temp1.possibleMoveY=j;
                                                            }
                                                            possibleMoves.push(temp1);
                                                            temp1=undefined;
                                                    }
                                            }
                                    }
                            }
                                            
                    }
            }
                            
    }
    
    
    moveToDo = Math.floor((Math.random()*(possibleMoves.length)));
    
    var temp2 = positions[possibleMoves[moveToDo].pieceToMoveY][possibleMoves[moveToDo].pieceToMoveX];
    positions[possibleMoves[moveToDo].pieceToMoveY][possibleMoves[moveToDo].pieceToMoveX]=undefined; 
	positions[possibleMoves[moveToDo].possibleMoveY].splice(possibleMoves[moveToDo].possibleMoveX,1, temp2);
	
	
	whosTurnItIs = !positions[possibleMoves[moveToDo].possibleMoveY][possibleMoves[moveToDo].possibleMoveX].isWhite;
   	if (whosTurnItIs)
	{
		document.getElementById("demo").innerHTML="Your turn computer has moved";
	}else
	{
		document.getElementById("demo").innerHTML="Black";
	}
	drawBoard();
   
    
    possibleMoves.length=0;

}


