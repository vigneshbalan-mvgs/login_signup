const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// dark-mode 

// let content = document.getElementsByTagName('body')[o];
// let darkMode = document.getElementById("theme");

// theme.addEventListener('click', function (){
//     theme.classList.toggle('active');
//     content.classList.toggle('night');
// })