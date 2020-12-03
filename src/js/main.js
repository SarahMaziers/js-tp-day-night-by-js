document.documentElement.classList.add('js-enabled');
const button = document.querySelector('.tumbler__wrapper');
const e_body=document.body;
const posts=document.querySelectorAll('.post');
const e_tumblr=document.querySelector('.tumbler');
button.addEventListener('click',function () {
    e_body.classList.toggle('body--night-mode');
    e_tumblr.classList.toggle('tumbler--night-mode');
    for(const post of posts){
        post.classList.toggle('post--night-mode');
    }
})




