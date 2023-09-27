$(document).ready(function () {
  const brr = [];
  const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
  btnSubmit = $("#submit");
  btnSubmit.click(function (e) {
    e.preventDefault();
    const email = $("#username").val();
    const password = $("#password").val();
    const item = {
      id: new Date().getTime(),
      email: email,
      password: password,
    };
    if (email) {
      if (password.length >= 8) {
        if (specialCharacterRegex.test(password)) {
          const profile = {
            email: email,
            password: password,
          };
          brr.push(profile);
          console.log(JSON.stringify(brr));
        } else {
          alert("Password must contain at least one special character");
        }
      } else {
        alert(" password should be atleast 8 character");
      }
    } else {
      alert("enter valid email");
    }
  });
});
