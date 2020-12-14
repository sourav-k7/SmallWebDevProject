let button = document.querySelector('button')
let head = document.querySelector('h1');
let moveOutColor;
let moveIn;
function change() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r},${g},${b})`;
    let invcolor = `rgb(${255 - r},${255 - g},${255 - b})`;
    moveOutColor = invcolor;
    moveIn=color;
    head.style.color = invcolor;
    button.style.color = color;
    button.style.borderColor = color;
    button.style.background = invcolor;
    document.body.style.background = color;
}
button.addEventListener('click', change);

button.addEventListener('mouseenter', function () {
    button.style.background =moveIn;
    button.style.borderColor=moveOutColor;
    button.style.color=moveOutColor;
} )

button.addEventListener('mouseleave', function () {
     button.style.background = moveOutColor;
    button.style.borderColor=moveIn;
    button.style.color=moveIn;
})
