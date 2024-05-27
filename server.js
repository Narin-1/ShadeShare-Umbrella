// Add event listeners to menu items
const homeMenu = document.querySelector('#home-page');
const aboutMenu = document.querySelector('#about-page');
const howShadeshareWorksMenu = document.querySelector('#HowShadeshareWorks-page');
const signUpMenu = document.querySelector('#SignUp-page');

homeMenu.addEventListener('click', () => {
  console.log('Home menu clicked');
  homeMenu.classList.add('highlight');
  aboutMenu.classList.remove('highlight');
  howShadeshareWorksMenu.classList.remove('highlight');
  signUpMenu.classList.remove('highlight');
});

aboutMenu.addEventListener('click', () => {
  console.log('About menu clicked');
  homeMenu.classList.remove('highlight');
  aboutMenu.classList.add('highlight');
  howShadeshareWorksMenu.classList.remove('highlight');
  signUpMenu.classList.remove('highlight');
});

howShadeshareWorksMenu.addEventListener('click', () => {
  console.log('How Shadeshare Works menu clicked');
  homeMenu.classList.remove('highlight');
  aboutMenu.classList.remove('highlight');
  howShadeshareWorksMenu.classList.add('highlight');
  signUpMenu.classList.remove('highlight');
});

signUpMenu.addEventListener('click', ( ) => {
  console.log('Sign Up menu clicked');
  homeMenu.classList.remove('highlight');
  aboutMenu.classList.remove('highlight');
  howShadeshareWorksMenu.classList.remove('highlight');
  signUpMenu.classList.add('highlight');
});


let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signupBtn.onclick = function() {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.add("active");
    signupBtn.classList.remove("disabled");
    signinBtn.classList.remove("active");
    signinBtn.classList.add("disabled");
};

signinBtn.onclick = function() {
    nameField.style.maxHeight = "0px";
    title.innerHTML = "Sign In";
    signinBtn.classList.add("active");
    signinBtn.classList.remove("disabled");
    signupBtn.classList.remove("active");
    signupBtn.classList.add("disabled");
};











