function point(cell){
	//point to the html object
	return arr[cell[0]][cell[1]];
}

function solve(){
	//find all empty cells and put it into an array
	let cells = findEmptyCells();
	let temp;
	//now start loop trought the cells array
	for(let c=0 ; c<cells.length ; c++){
		//changes font colour of empty cells to red
		point(cells[c]).style = 'border-color:black; font-size:20pt ; color:coral; text-align: center; height:35px ; width:35px ; border-style:dotted; border-radius:10px ; margin: 5px 5px 5px 5px;';
		temp = findNextSuitableNumber(cells[c]);
		//if temp is false that means we  can not find any suitable number for the position 
		//that means we have to goto the previous cell and find next suitable number
		if (temp==false){
			//to goto the previous cell we and decrementing c by 2 so that after adding 1 in next loop it becomes c-1
			c = c-2;
			if(c==-2){
				break;
				alert('no solution');
			}
		}
	}
	cells=[];
}

function findEmptyCells(){
	let cells = []
	for(let i=0 ; i<n ; i++){
		for(j=0 ; j<n ; j++){
			if(arr[i][j].value == 0){
				cells.push([i,j]);
			}
		}
	}
	return cells;
}


function checkRow(a,posi,posj,num){
	let res = true;
	for(let k=0 ; k<a.length ; k++){

		if(k!=posj && (a[posi][k].value==num )) {
			res = false;
			break;
		}
	}
	return res;
}

function checkColumn(a,posi,posj,num){
	let res = true;
	for(let k=0 ; k<a.length ; k++){

		if(k!=posi && (a[k][posj].value==num )) {
			res = false;
			break;
		}
	}
	return res;
}

function checkBlock(a,posi,posj,num){
	let res = true;
	let rootN = Math.sqrt(n);
	let blockTopX = rootN*(Math.floor(posi/rootN));
	let blockTopY = rootN*(Math.floor(posj/rootN));

	for(let p = blockTopX ; p<blockTopX+rootN ; p++){
		for(let q=blockTopY ; q<blockTopY+rootN ; q++){
			if(p!=posi && q!=posj && a[p][q].value==num){
				res = false;
				break;
			}
		}
	}
	return res;
}


function valid(a,posi,posj,num){
	if(checkBlock(a,posi,posj,num) && checkColumn(a,posi,posj,num) && checkRow(a,posi,posj,num)){
		return true;
	}
	else{
		return false;
	}
}


function findNextSuitableNumber(cell){
	let currentVal = parseInt(point(cell).value,10);
	//let rootN = Math.sqrt(n);

	for(let num = currentVal+1 ; num <= n ; num++){
		if(valid(arr,cell[0],cell[1],num)){
			//try the next possible number and check for validtion
			point(cell).value = num;
			//if any possible number is fond then return true
			return true;
		}
	}	
	//try the next possible number and check for validtion
	point(cell).value = 0;
	return false;
}

