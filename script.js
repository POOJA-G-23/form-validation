const form = document.getElementById("registrationForm");

function setError(fieldId, errorId, message) {
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
        errorEl.textContent = message;
    }
    const inputEl = document.getElementById(fieldId);
    if (inputEl) {
        const box = inputEl.closest(".input-box");
        if (box) {
            box.classList.add("input-error");
        }
    }
}

function clearError(fieldId, errorId) {
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
        errorEl.textContent = "";
    }
    const inputEl = document.getElementById(fieldId);
    if (inputEl) {
        const box = inputEl.closest(".input-box");
        if (box) {
            box.classList.remove("input-error");
        }
    }
}

// Clear individual errors on user input
["name", "email", "phone", "pin", "password", "confirmPassword", "gender"].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("input", () => {
            clearError(id, id + "Error");
            document.getElementById("successMessage").textContent = "";
        });
        element.addEventListener("change", () => {
            clearError(id, id + "Error");
            document.getElementById("successMessage").textContent = "";
        });
    }
});

const termsCheckbox = document.getElementById("terms");
if (termsCheckbox) {
    termsCheckbox.addEventListener("change", () => {
        document.getElementById("termsError").textContent = "";
    });
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const pin = document.getElementById("pin").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const gender = document.getElementById("gender").value;
    const terms = document.getElementById("terms").checked;

    let valid = true;

    // Clear all existing errors
    document.querySelectorAll("small").forEach(function(element) {
        element.textContent = "";
    });
    document.querySelectorAll(".input-box").forEach(function(box) {
        box.classList.remove("input-error");
    });
    document.getElementById("successMessage").textContent = "";

    // NAME VALIDATION
    if (name === "") {
        setError("name", "nameError", "Full name is required.");
        valid = false;
    } else if (!/^[A-Za-z ]+$/.test(name)) {
        setError("name", "nameError", "Name should contain only letters.");
        valid = false;
    }

    // EMAIL VALIDATION
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        setError("email", "emailError", "Email address is required.");
        valid = false;
    } else if (!emailPattern.test(email)) {
        setError("email", "emailError", "Enter a valid email address.");
        valid = false;
    }

    // PHONE VALIDATION
    if (phone === "") {
        setError("phone", "phoneError", "Phone number is required.");
        valid = false;
    } else if (!/^[6-9][0-9]{9}$/.test(phone)) {
        setError("phone", "phoneError", "Enter a valid 10-digit phone number (starts with 6-9).");
        valid = false;
    }

    // PIN CODE VALIDATION
    if (pin === "") {
        setError("pin", "pinError", "PIN code is required.");
        valid = false;
    } else if (!/^[0-9]{6}$/.test(pin)) {
        setError("pin", "pinError", "PIN code must contain exactly 6 digits.");
        valid = false;
    }

    // PASSWORD VALIDATION
    if (password === "") {
        setError("password", "passwordError", "Password is required.");
        valid = false;
    } else if (password.length < 8) {
        setError("password", "passwordError", "Password must contain at least 8 characters.");
        valid = false;
    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(password)) {
        setError("password", "passwordError", "Use uppercase, lowercase and at least one number.");
        valid = false;
    }

    // CONFIRM PASSWORD VALIDATION
    if (confirmPassword === "") {
        setError("confirmPassword", "confirmPasswordError", "Please confirm your password.");
        valid = false;
    } else if (password !== confirmPassword) {
        setError("confirmPassword", "confirmPasswordError", "Passwords do not match.");
        valid = false;
    }

    // GENDER VALIDATION
    if (gender === "") {
        setError("gender", "genderError", "Please select your gender.");
        valid = false;
    }

    // TERMS VALIDATION
    if (!terms) {
        document.getElementById("termsError").textContent = "Please accept the Terms & Conditions.";
        valid = false;
    }

    // SUCCESS
    if (valid) {
        document.getElementById("successMessage").innerHTML =
            '<i class="fa-solid fa-circle-check"></i> Registration successful!';
        form.reset();
    }
});

// SHOW / HIDE PASSWORD FUNCTIONALITY
function togglePassword(id, icon) {
    const input = document.getElementById(id);
    if (!input) return;

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
