var num1=150;
var num2=250;

var num3=add(num1,num2);
console.log(num3);
var num4=sub(num1,num2);
console.log(num4);
var num5=mul(num1,num2);
console.log(num5)

function add(x,y)
{
    z=x+y;
    return z;
}
function sub(x,y)
{
    z=x-y;
    return z;
}
function mul(x,y)
{
    z=x*y;
    return z;
}