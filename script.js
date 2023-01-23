// Eamil JS
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
  const nameField = document.getElementById("contactName");
  const emailField = document.getElementById("contactEmail");
  const messageField = document.getElementById("contactMessage");
  const errorText = document.getElementById("error-text");

  const nameValue = nameField.value;
  const emailValue = emailField.value;
  const messageValue = messageField.value;

  const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    messageValue: messageValue,
  };

  if (nameValue && emailValue && messageValue) {
    console.log(nameValue, emailValue, messageValue);
    emailjs.send(
      "service_class28test",
      "template_plmfniq",
      templateParams,
      "uptWrWYIZaMbXfJXw"
    );
    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
    errorText.innerHTML = "";
  } else {
    errorText.innerHTML =
      '<p class="text-warning" >Please make sure all fields are filled in correctly</p>';
  }
});

// Preloader Function
window.onload = function () {
  const Preloader = document.getElementById("Preloader-area");
  Preloader.className = "page-loaded";

  setTimeout(function () {
    Preloader.style.display = "none";
  }, 500);
};
