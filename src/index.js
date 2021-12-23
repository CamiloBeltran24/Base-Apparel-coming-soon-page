const button = document.getElementById("formButton");
const errorIcon =
  '<img src="./src/assets/images/icon-error.svg" alt="error icon" class="errorIcon" />';
const re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

button.onclick = function () {
  const email = document.getElementById("email").value;

  if (email == null || email == undefined || email == " ") {
    console.log("Correo Vacio");
  } else {
    // validateEmail(email);
  }
};

// const validateEmail = (email) => {
//   const form = document.getElementById("emailForm");

//   if (!re.exec(email)) {
//     const input = document.getElementById("email");
//     console.log(input);

//     form.innerHTML += errorIcon;
//     input.classList.add("alert");
//   } else {
//   }
// };
