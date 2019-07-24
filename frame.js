var n = sessionStorage.number;
var arr = new Array(n);
let temp ;
let p;

for(let i=0 ; i<n ; i++){
	var row = new Array(n);
	for(let j=0 ; j<n ; j++){
		//temp = '<input type="number" min="0" max="9" placeholder="*">'
		temp = document.createElement('input');
		temp.size = 2;
		//temp.type = 'number';
		temp.min = 0;
		temp.max = n;
		temp.value = 0
		temp.style = "text-align: center; font-size:20pt ;height:35px ; width:35px ; border-style:dotted; border-radius:10px ; margin: 5px 5px 5px 5px;"
		row[j] = temp;
		//temp = '';
	}
	arr[i] = row;
}

var block = document.getElementById('myDiv');

for(let i=0 ; i<n ; i++){
	for(let j=0 ; j<n ; j++){
		block.appendChild(arr[i][j]);
		temp = document.createElement('b');
		temp.innerText = '  ';
		block.appendChild(temp);
	}
	block.appendChild(document.createElement('br'));
}
	
