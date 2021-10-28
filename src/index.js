const form = document.getElementById("emailForm");
const button = document.getElementById("formButton");

button.onclick(() => {
  const email = document.getElementById("email");
});

const validateEmail = (email) => {
  function estaVacio(email) {
    if (email == null || email == undefined || email == " ") {
      return true;
    } else {
      return false;
    }
  }

  if (estaVacio(email)) {
    console.log("El elemento esta vacio");
  }
};
