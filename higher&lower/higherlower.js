let max=prompt("Enter the maximum:");
let mx=parseInt(max);
let num=parseInt(Math.random()*mx)+1;
// alert(num);
let input=prompt("Enter your guess:");
let att=1;
while(input!=num)
{
    if(input<num)
    {
      input=  prompt("Too Low,guess again");
    }
    else{
        input=prompt("TooHigh, guess again")
    
    }
    if(input=='q')
    {
    
        break;
    }
    att++;
}
if(input!='q')
{
    alert( `Correct attempt \n number of attempt : ${att}`);
}
else{
    alert(`Number of attempt : ${att}`);
}