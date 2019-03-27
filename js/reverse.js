var num=159753;
var rev=0;
var rem=0;
while(num>0)
{
    rem=num%10;
    rev=rev*10+rem;
    num=parseInt(num/10);

}
console.log(rev);