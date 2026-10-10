const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const pin = document.getElementById("pin").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;
    const gender = document.getElementById("gender").value;
    const terms = document.getElementById("terms").checked;

    let valid = true;


    // Clear errors
    document.querySelectorAll("small").forEach(function(element) {
        element.textContent = "";
    });

    document.getElementById("successMessage").textContent = "";


    // NAME
    if (name === "") {

        document.getElementById("nameError").textContent =
            "Full name is required.";

        valid = false;

    } else if (!/^[A-Za-z ]+$/.test(name)) {

        document.getElementById("nameError").textContent =
            "Name should contain only letters.";

        valid = false;
    }


    // EMAIL
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        document.getElementById("emailError").textContent =
            "Email address is required.";

        valid = false;

    } else if (!emailPattern.test(email)) {

        document.getElementById("emailError").textContent =
            "Enter a valid email address.";

        valid = false;
    }


    // PHONE
    if (phone === "") {

        document.getElementById("phoneError").textContent =
            "Phone number is required.";

        valid = false;

    } else if (!/^[6-9][0-9]{9}$/.test(phone)) {

        document.getElementById("phoneError").textContent =
            "Enter a valid 10-digit phone number.";

        valid = false;
    }


    // PIN
    if (pin === "") {

        document.getElementById("pinError").textContent =
            "PIN code is required.";

        valid = false;

    } else if (!/^[0-9]{6}$/.test(pin)) {

        document.getElementById("pinError").textContent =
            "PIN code must contain 6 digits.";

        valid = false;
    }


    // PASSWORD
    if (password === "") {

        document.getElementById("passwordError").textContent =
            "Password is required.";

        valid = false;

    } else if (password.length < 8) {

        document.getElementById("passwordError").textContent =
            "Password must contain at least 8 characters.";

        valid = false;

    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(password)) {

        document.getElementById("passwordError").textContent =
            "Use uppercase, lowercase and a number.";

        valid = false;
    }


    // CONFIRM PASSWORD
    if (confirmPassword === "") {

        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password.";

        valid = false;

    } else if (password !== confirmPassword) {

        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";

        valid = false;
    }


    // GENDER
    if (gender === "") {

        document.getElementById("genderError").textContent =
            "Please select your gender.";

        valid = false;
    }


    // TERMS
    if (!terms) {

        document.getElementById("termsError").textContent =
            "Please accept the Terms & Conditions.";

        valid = false;
    }


    // SUCCESS
    if (valid) {

        document.getElementById("successMessage").innerHTML =
            '<i class="fa-solid fa-circle-check"></i> ' +
            'Registration successful!';

        form.reset();
    }

});


// SHOW / HIDE PASSWORD

function togglePassword(id, icon) {

    const input = document.getElementById(id);

    if (input.type === "password") {

        input.type = "text";

        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    } else {

        input.type = "password";

        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}