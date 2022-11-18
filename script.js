const form = document.querySelector(".email-form");
const email = document.getElementById("email");
const error = document.querySelector(".error")
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (e) => { 
   if (!(email.value.match(mailFormat))) {
      error.classList.remove("error-display")
      email.style.cssText = ("border: 1px solid red; color: black")
      e.preventDefault()
   }
})

