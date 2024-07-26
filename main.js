const user_container = document.querySelector('.user-container');
const reg_btn = document.querySelector('.registration-btn');
const signin_btn = document.querySelector('.login-btn');


reg_btn.addEventListener('click', ()=>{
    user_container.classList.add('login-section-display')
})

signin_btn.addEventListener('click',() =>{
    user_container.classList.remove('login-section-display')
})

document.getElementById('signUP').addEventListener('submit', 'click',function(eve){
    eve.preventDefault();
    window.location.href = 'aces.html';
});

document.getElementById('SignIN').addEventListener('sumbit','click',function(e){
    e.preventDefault();
    window.location.href = 'welcome.html';
})


function redirectSignin(){
    window.location.assign("login.html");
};

function redirectACES(){
   window.location.assign("https:/aces.dypvp.edu.in");

}

function redirectIndex(){
    window.location.href = 'index.html';

}
function tologin(){
    window.location.href = 'login.html';
}
function toaces(){
    window.location.href = 'aces.html';
    window.location.assign("aces.html");
}


