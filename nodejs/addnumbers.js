const mymodule=require('./addmodule');
var x=50;
var y=34;

z=mymodule.addnum(x,y);
a=mymodule.subnum(x,y);     //custom module
b=mymodule.mulnum(x,y);
c=mymodule.divnum(x,y);

console.log(a)
console.log(z)
console.log(b)
console.log(c)