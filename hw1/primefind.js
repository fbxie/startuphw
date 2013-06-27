#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
var w = fs.createWriteStream(outfile);
var n = 600;
var A = [];
var i;
for(i=0;i<n;i++)
	A[i]=true;
var l = Math.ceil(Math.sqrt(n));
var j,k;
for(i=2;i<=l;i++){
	if(A[i]){
		for(j=0,k=i*i;k<n;){
			A[k] = false;
			j++;
			k = i*(i+j); 
		}		
	}
}
l = 1;
for(i=2;i<n;i++){
	if(A[i]) {
		if(l < 100){
			w.write(i+",");
		}else{
			w.write(i+"");
			w.end();
			break;
		}
		l++;
	}
}
console.log("Total "+l+" prime numbers");
