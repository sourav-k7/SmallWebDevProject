
const button=document.querySelector('button');
let score=document.getElementById('score');
let count=0;
function scoreInc (){
    count++;
    score.innerText=count;
}
const pop=document.getElementById('dbc');

pop.style.display='none';
function popup()
{
    pop.style.display='block';
    window.setInterval(() => {
        pop.style.display='none';
        
    }, 700);
}

button.addEventListener('click',scoreInc);
// button.addEventListener('dblclick',()=> count+=2)
button.addEventListener('dblclick',popup)