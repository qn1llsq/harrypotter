document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
      alert("Паролі не збігаються. Будь ласка, спробуйте ще раз.");
      return;
    }
    const user = { username, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(user));
    alert(`Ласкаво просимо, ${username}! Ви успішно зареєстровані.`);
    this.reset();
  });
