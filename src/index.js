const button = document.getElementById("formButton");
const re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

button.addEventListener("click", () => {
  let email = document.getElementById("email").value;
  console.log("Email: ", email);
  const formulario = document.getElementById("emailForm");
  const input = document.getElementById("email");
  const message = document.querySelector(".errorMessage");

  formulario.addEventListener("submit", (e) => {
    const img = document.createElement("img");
    if (!re.test(email)) {
      message.innerHTML = "Please provide a valid email";
      input.style.borderColor = "hsl(0, 93%, 68%)";
      img.setAttribute("src", "./src/assets/images/icon-error.svg");
      img.setAttribute("class", "errorIcon");
      formulario.appendChild(img);
      formulario.appendChild(message);
      button.style.background = "hsl(0, 80%, 86%)";
      button.style.boxShadow = "3px 3px 18px 0px hsl(0, 6%, 24%)";
    } else {
      if (document.querySelector(".errorIcon")) {
        input.style.borderColor = "hsl(0, 36%, 70%)";
        message.innerHTML = "Success";
        let imagenes = document.querySelectorAll(".errorIcon");
        imagenes.forEach((imagen) => {
          imagen.remove();
        });
      }
    }
    e.preventDefault();
  });
});
