// This code is for validation process.
function validateLogin(email, password) {
    const defaultEmail = "yasin@gmail.com";
    const defaultPassword = "123456";

    return email === defaultEmail && password === defaultPassword;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('loginform').addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');

        if (validateLogin(email, password)) {
            alert('Login successfull');
            errorMessage.textContent = '';
            window.location.href = 'firstpage.html';
        } else {
            errorMessage.textContent = 'Invalid email or password. Please try again.';
        }
    });
});

// This code for password visibility icon

const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".password-toggle-icon i");

togglePassword.addEventListener("click", function () {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
});