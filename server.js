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

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('signupBtn').addEventListener('click', function() {
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Simple validation
      if (name && email && password) {
          // Display success message
          document.getElementById('successMessage').classList.remove('hidden');

          // Optionally, reset the form
          document.getElementById('signupForm').reset();
      } else {
          // Handle validation error
          alert('Please fill out all fields.');
      }
  });
});

// Add event listener to sign in button
signinBtn.onclick = function() {
  // Check if the current state is sign in
  if (title.innerHTML === "Sign In") {
      // Get form values
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Check if email and password are not empty
      if (email && password) {
          // Assuming 'successMessage' is the element where you want to display the success message
          // Change 'successMessage' to the actual ID or class of the element you want to use
          var successMessage = document.getElementById("successMessage");

          // Perform the sign-in process here
          // For demonstration purposes, let's assume the sign-in is successful
          var signInSuccessful = true;

          if (signInSuccessful) {
              // Show the success message
              successMessage.style.display = "block";
              successMessage.innerHTML = "Welcome Back!";
          } else {
              // If sign-in fails, you can display an error message instead
              successMessage.style.display = "none"; // Hide the success message if displayed
              // Display an error message or perform other actions as needed
          }

          // Reset other elements as needed
          nameField.style.maxHeight = "0px";
          title.innerHTML = "Sign In";
          signinBtn.classList.add("active");
          signinBtn.classList.remove("disabled");
          signupBtn.classList.remove("active");
          signupBtn.classList.add("disabled");
      } else {
          // If email or password is empty, do not proceed with sign-in and show an error message
          alert('Please enter your email and password.');
      }
  } else {
      // If the current state is sign up, toggle to sign in
      nameField.style.maxHeight = "0px";
      title.innerHTML = "Sign In";
      signinBtn.classList.add("active");
      signinBtn.classList.remove("disabled");
      signupBtn.classList.remove("active");
      signupBtn.classList.add("disabled");
  }
};











