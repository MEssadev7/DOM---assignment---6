// Task 1: Prevent Form Submission

let form = document.getElementById("myForm");
let name = document.getElementById("name");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (name.value.trim() === "") {
    alert("Please enter your name");
  } else {
    alert("Form Submitted Successfully");
  }
});

// Task 2: Required Field Validation

let form1 = document.getElementById("Form2");
let nameInput = document.getElementById("name1");

form1.addEventListener("submit", function (event) {
  event.preventDefault();

  if (nameInput.value.trim() === "") {
    alert("Name is required");
  } else {
    alert("Form Submitted Successfully");
  }
});

// Task 3: Email Validation

let form2 = document.getElementById("Form3");
let emailInput = document.getElementById("email1");

form2.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = emailInput.value.trim();

  if (email === "") {
    alert("Email is required");
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address");
  } else {
    alert("Form Submitted Successfully");
  }
});

// Task 4: Password Validation

let form3 = document.getElementById("Form4");
let passwordInput = document.getElementById("password1");

form3.addEventListener("submit", function (event) {
  event.preventDefault();

  let password = passwordInput.value.trim();

  if (password === "") {
    alert("Password is required");
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long");
  } else {
    alert("Form Submitted Successfully");
  }
});

// Task 5: Show Error Message in DOM

const studentForm = document.querySelector("#myForm1");
const clearButton = document.querySelector("#resetBtn");
const successText = document.querySelector("#statusMsg");

// Submit par error messages dikhane ke liye
studentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let formIsValid = true;

  const userInput = document.querySelector("#username").value.trim();
  const emailInput = document.querySelector("#email").value.trim();

  if (userInput === "") {
    document.querySelector("#nameError").style.color = "red";
    document.querySelector("#nameError").style.fontSize = "14px";
    document.querySelector("#nameError").textContent = "Name is required.";
    formIsValid = false;
  } else {
    document.querySelector("#nameError").style.color = "green";
    document.querySelector("#nameError").style.fontSize = "14px";
    document.querySelector("#nameError").textContent = "Name is valid.";
  }

  if (emailInput === "") {
    document.querySelector("#emailError").style.color = "red";
    document.querySelector("#emailError").style.fontSize = "14px";
    document.querySelector("#emailError").textContent = "Email is required.";
    formIsValid = false;
  } else {
    document.querySelector("#emailError").style.color = "green";
    document.querySelector("#emailError").style.fontSize = "14px";
    document.querySelector("#emailError").textContent = "Email is valid.";
  }

  if (formIsValid) {
    successText.textContent = "Form submitted successfully!";
    studentForm.reset();
  }
});

// Reset button click hone par inputs aur error messages clear karne ke liye
clearButton.addEventListener("click", function () {
  studentForm.reset();

  const allErrorSpans = document.querySelectorAll(".error-msg");
  allErrorSpans.forEach(function (singleError) {
    singleError.textContent = "";
  });

  successText.textContent = "";
});

// Task 6: Reset Form

const task6Form = document.getElementById("Form6");
const task6ResetBtn = document.getElementById("t6ResetBtn");
const task6Success = document.getElementById("t6Success");

// Validate form on submit
task6Form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  const nameVal = document.getElementById("t6Name").value.trim();
  const emailVal = document.getElementById("t6Email").value.trim();
  const passVal = document.getElementById("t6Password").value.trim();

  // Check Name (value)
  if (nameVal === "") {
    document.getElementById("t6NameError").textContent = "Name is required.";
    isValid = false;
  } else {
    document.getElementById("t6NameError").textContent = "";
  }

  // Check Email (includes)
  if (emailVal === "" || !emailVal.includes("@") || !emailVal.includes(".")) {
    document.getElementById("t6EmailError").textContent =
      "Enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("t6EmailError").textContent = "";
  }

  // Check Password (length)
  if (passVal.length < 6) {
    document.getElementById("t6PasswordError").textContent =
      "Password must be at least 6 characters.";
    isValid = false;
  } else {
    document.getElementById("t6PasswordError").textContent = "";
  }

  if (isValid) {
    task6Success.textContent = "Form submitted successfully!";
  } else {
    task6Success.textContent = "";
  }
});

// Clear inputs and error messages when Reset is clicked
task6ResetBtn.addEventListener("click", function () {
  // 1. Clear all input fields
  task6Form.reset();

  // 2. Clear all error messages
  const errorMessages = document.querySelectorAll(".t6-error");
  errorMessages.forEach(function (err) {
    err.textContent = "";
  });

  // Clear success message
  task6Success.textContent = "";
});
