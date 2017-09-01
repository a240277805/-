function add(a,b){
	add.prop1++;
	return a+b;
}
add.prop1=0;
add(1+2);
add(14+2);
console.log(add.prop1);