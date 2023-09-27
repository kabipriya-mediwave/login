$(document).ready(function () {
  const brr = [];
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  btnSubmit = $("#submit");
  btnSubmit.click(function (e) {
    e.preventDefault();
    const email = $("#username").val();
    const password = $("#password").val();
    if (emailRegex.test(email)) {
      if (passwordRegex.test(password)) {
        const profile = {
          email: email,
          password: password,
        };
        brr.push(profile);
        console.log(JSON.stringify(brr));
      } else {
        alert(
          "Password must contain at least 8 characters, including at least one letter, one digit, and one special character."
        );
      }
    } else {
      alert("Enter a valid email address.");
    }
  });
});
