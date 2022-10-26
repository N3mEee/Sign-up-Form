const phonenumber = document.querySelector("input[name=phonenumber");
const password = document.querySelector("input[name=password]");
const confirmpassword = document.querySelector("input[name=confirm-password]");

phonenumber.addEventListener("change", function (e) {
  if (Number.isInteger(parseInt(e.target.value))) {
    phonenumber.setCustomValidity("");
  } else {
    phonenumber.setCustomValidity("Invalid field");
  }
});

confirmpassword.addEventListener("change", function (e) {
  if (e.target.value === password.value) {
    confirmpassword.setCustomValidity("");
  } else {
    confirmpassword.setCustomValidity("Invalid field");
  }
});

password.addEventListener("change", function (e) {
  if (e.target.value === confirmpassword.value) {
    confirmpassword.setCustomValidity("");
  } else {
    confirmpassword.setCustomValidity("Invalid field");
  }
});
