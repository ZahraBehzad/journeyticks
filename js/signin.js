document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const usernameInput = document.getElementById("form2Example11");
  const passwordInput = document.getElementById("form2Example22");
  const loginButton = document.getElementById("loginbutton");
  const createNewButton = document.getElementById("createnewbutton");
  const errorParagraph = document.createElement('p');
  errorParagraph.classList.add('text-danger', 'mt-2');
  const successParagraph = document.createElement('p');
  successParagraph.classList.add('text-success', 'mt-2');

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });

  loginButton.addEventListener("click", function() {
    validateForm();
  });

  function validateForm() {
    removeErrorMessages();

    if (usernameInput.value.trim() === "") {
      displayErrorMessage("Please enter a username", usernameInput);
      return;
    }

    if (passwordInput.value.trim() === "") {
      displayErrorMessage("Please enter a password", passwordInput);
      return;
    }

    // Change the button text after successful submission
    loginButton.textContent = "Login Successful";

    // Clear input fields after submission
    usernameInput.value = "";
    passwordInput.value = "";
  }

  createNewButton.addEventListener("click", function() {
    removeErrorMessages();
    removeSuccessMessage();
    usernameInput.value = "";
    passwordInput.value = "";
    loginButton.textContent = "Submit";
  });

  function displayErrorMessage(message, inputElement) {
    errorParagraph.textContent = message;
    inputElement.parentNode.appendChild(errorParagraph);
  }

  function removeErrorMessages() {
    errorParagraph.remove();
  }

  function removeSuccessMessage() {
    successParagraph.remove();
  }
});
