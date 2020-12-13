// http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
let container = document.getElementById("cont")
for (let i = 1; i <= 151; i++) {
    let newdiv = document.createElement('div');
    let newspan = document.createElement('span');
    newspan.innerText=`#${i}`;
    let poke = document.createElement('img');
    poke.src = `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    newdiv.appendChild(poke);
    newdiv.appendChild(newspan);
    container.appendChild(newdiv);
}