
let p1btn = document.getElementById('play1btn');
let p2btn = document.getElementById('play2btn');
let resetbtn = document.getElementById('reset');
let p1score = document.getElementById('p1score');
let p2score = document.getElementById('p2score');
let select = document.getElementById('select');
let topscore = "5";
select.addEventListener('change', function () {
    topscore = select.options[select.selectedIndex].value;
    // console.log(topscore);
});
p1btn.addEventListener('click', function () {
    p1score.innerText = parseInt(p1score.innerText) + 1;
    decide();
})
p2btn.addEventListener('click', function () {
    p2score.innerText = parseInt(p2score.innerText) + 1;
    decide();
})
resetbtn.addEventListener('click',function(){
    p1score.innerText='0';
    p2score.innerText='0';
    p1btn.disabled=false;
    p2btn.disabled=false;
    p1score.classList.remove('win','loss');
    p2score.classList.remove('win','loss');


})
function decide()
{
    // console.log(p1score.innerText)
    if (p1score.innerText == topscore) {
    //    console.log('win') ;
        p1score.classList.add('win')
        p2score.classList.add('loss');
        p1btn.disabled=true;
        p2btn.disabled=true;
    }
    if(p2score.innerText==topscore)
    {
        p1score.classList.add('loss');
        p2score.classList.add('win');
        p1btn.disabled=true;
        p2btn.disabled=true;
    }
}