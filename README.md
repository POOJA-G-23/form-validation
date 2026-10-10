# 📋 Interactive Form Validation System

A responsive, client-side Form Validation web application built with HTML5, CSS3, and Vanilla JavaScript. Features real-time error handling, regex pattern checking, password confirmation, toggle visibility, and modern UI design.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

- **Full Name Validation**: Checks for required status and alphabetic character constraint.
- **Email Validation**: Strict regex pattern validation for RFC standard email syntax.
- **Phone Number Validation**: Validates 10-digit Indian standard mobile numbers starting with digits `6-9`.
- **PIN Code Validation**: Requires exactly 6 numeric digits.
- **Password Strength Check**: Minimum 8 characters with at least one uppercase letter, one lowercase letter, and one number.
- **Password Match Verification**: Ensures Password and Confirm Password match before submission.
- **Show / Hide Password**: Interactive eye icon toggle for visibility.
- **Gender Selection**: Dropdown select validation.
- **Terms & Conditions**: Required agreement checkbox check.
- **Real-time Feedback**: Dynamic error clearing as the user corrects their input.
- **Modern Responsive Design**: Dual-pane layout, gradient accents, FontAwesome icon integration, and mobile compatibility.

---

## 🔍 Validation Rules Summary

| Field | Rule / Regex | Description |
| :--- | :--- | :--- |
| **Full Name** | `/^[A-Za-z ]+$/` | Required, letters and spaces only |
| **Email** | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | Valid email address format |
| **Phone** | `/^[6-9][0-9]{9}$/` | Exactly 10 digits starting with 6, 7, 8, or 9 |
| **PIN Code** | `/^[0-9]{6}$/` | Exactly 6 numeric digits |
| **Password** | `/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/` | ≥ 8 chars with uppercase, lowercase, and digit |
| **Confirm Password** | Must match `password` | Exact string match |
| **Gender** | Required selection | Male / Female / Other |
| **Terms** | Must be checked | Terms & Conditions confirmation |

---

## 🚀 How to Run Locally

### Option 1: Open Directly in Browser
Simply open `index.html` (or `exp2index.html`) in any modern web browser:
```bash
start index.html
```

### Option 2: Run with Python HTTP Server
```bash
python -m http.server 3000
```
Then navigate to:
`http://localhost:3000`

### Option 3: Run with Node.js (`npx serve`)
```bash
npx serve .
```

---

## 📂 Project Structure

```text
form-validation/
├── index.html        # Main standard web application entry point
├── style.css         # Modern styling and responsive layout rules
├── script.js         # Interactive form validation logic
├── exp2index.html    # Lab experiment index HTML
├── exp2style.css     # Lab experiment stylesheet
├── exp2script.js     # Lab experiment validation script
└── README.md         # Project documentation
```

---

## 👩‍💻 Author

- **GitHub**: [@POOJA-G-23](https://github.com/POOJA-G-23)
