let form=document.querySelector('form');
form.addEventListener('submit',function(evt){
    evt.preventDefault();
    let user=form.elements.username;
    let tweet = form.elements.twt;
    tweetAdder(user.value,tweet.value);
})
let list=document.querySelector('ul');

function tweetAdder(username,tweet){
let listItem=document.createElement('li');
listItem.innerHTML=`<b>${username}</b>:${tweet}`;
list.appendChild(listItem);
}