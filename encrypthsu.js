function encrypt(string){
	return string
	.toString()
	.split('')
	.map((a,i)=>a=string.charCodeAt(i)).reverse()
	.map((a,i)=>a+(i*26)).map((a,i)=>~~a-(i-12)*2+'')
	.reduce((a,b)=>a+b)
}