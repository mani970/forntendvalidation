let form = document.querySelector("#form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let smallUsername = document.querySelector("#usernameSmall");
let smallPassword = document.querySelector("#passwordSmall");

let button = document.querySelector("#button");
let username_regex = /^[a-zA-Z]+$/;
let password_regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

username.addEventListener("input", validate);
password.addEventListener("input", validate);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(username.value);
  console.log(username.password);
});

function validate(e) {
  let target = e.target;

  if (target.name === "password") {
    //e.target.name === e.target.value
    if (password_regex.test(target.value)) {
      target.classList.add("text-success");
      target.classList.remove("text-danger");
      //innerText
      smallPassword.innerHTML = "valid";
      smallPassword.classList.add("text-success");
      smallPassword.classList.remove("text-danger");
    } else {
      target.classList.add("text-danger");
      target.classList.remove("text-success");
      //innerText
      smallPassword.innerHTML =
        "Entered value must be camelcase with number&specialcharacter";
      smallPassword.classList.add("text-danger");
      smallPassword.classList.add("text-success");
    }
  }
}
