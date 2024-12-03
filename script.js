// Form Validation

// create variables for form inputs
const form = document.getElementById("formContact");
const fname = document.getElementById("formName");
const phone = document.getElementById("formPhone");
const email = document.getElementById("formEmail");
const message = document.getElementById("formMessage");

// prevent form from submitting without validation
form.addEventListener("submit", (form) => {
  form.preventDefault();
  formValidate();
});

// give error message and indicate invalid
function error(element, message) {
  const inputInvalid = element.parentElement;
  const displayError = inputInvalid.querySelector(".error");
  displayError.innerText = message;
  inputInvalid.classList.add("invalid");
  inputInvalid.classList.remove("valid");
}
// remove error message and indicate valid
function success(element) {
  const inputValid = element.parentElement;
  const removeError = inputValid.querySelector(".error");
  removeError.innerText = "";
  inputValid.classList.add("valid");
  inputValid.classList.remove("invalid");
}

// check is email is real
function emailIsValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function formValidate() {
  // set variables for form values and remove excess space
  const fnameValue = fname.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  console.log(fnameValue);
  console.log(emailValue);
  //check if name empty or contains numbers
  if (fnameValue === "") {
    error(fname, "Don't forget your name!");
  } else {
    success(fname);
  }
  //check if phone empty
  if (phoneValue === "") {
    error(phone, "Don't forget your number!");
  } else {
    success(phone);
  }

  if (emailValue === "") {
    error(email, "Don't forget your email!");
  } else if (!emailIsValid(email)) {
    error(email, "That email isn't real :(");
  } else {
    success(email);
  }
  //check if message is empty
  if (messageValue === "") {
    error(message, "You gotta say something!");
  } else {
    success(message);
  }
}

const img1 = document.getElementById("img1details");
const img2 = document.getElementById("img2details");
const img3 = document.getElementById("img3details");

function showDetails1() {
  img1.classList.toggle("hide");
}
function showDetails2() {
  img2.classList.toggle("hide");
}

function showDetails3() {
  img3.classList.toggle("hide");
}


// Filter function

const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.img-wrap');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        projects.forEach(project => {
            if (project.getAttribute('data-category') === category || category === 'all') {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});


// dark mode toggle

const darkToggle = document.getElementById('dark-toggle');
darkToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
