function read(){
    var num1=parseInt(document.getElementById("num1").value);
    var num2=parseInt(document.getElementById("num2").value);
    var oper=document.getElementById("option").value;
    var z=0;
    switch(oper)

        {
            case "Add":
                z=num1+num2;
                console.log(z);
                break;
            case "Sub":
                z=num1-num2;
                console.log(z);
                break;
            case "Mul":
                z=num1*num2;
                console.log(z);
                break;
            case "Div":
                z=num1/num2;
                console.log(z);
                break;


        }

    document.getElementById("result").innerHTML=<b>+z+</b>;
}