var n=159753;
var rev=0;
var rem=0;
var result=reverse(n);
//console.log(rev);

function reverse(num)
{
    while (num>0)
    {
    rem=num%10;
    rev=rev*10+rem;
    num=parseInt(num/10);
    }
    console.log(rev);
}
