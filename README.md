# Instagram-form

Instagram-form is a three-page, Instagram-inspired experience created for a school assignment. It mimics the onboarding funnel (disclaimer page → login → sign-up) and demonstrates responsive layouts, custom styling, and interactive form validation entirely in vanilla HTML, CSS, and JavaScript.

##  Features
- **Three-step flow** – `index.html` warns users that the site is a classroom exercise, `index2.html` hosts the login UI, and `index3.html` contains the sign-up form.
- **Client-side validation** – JavaScript checks username, password strength, email/phone input, and toggles button states so only valid submissions succeed.
- **SweetAlert2 modals** – Friendly feedback for logging in, reporting issues, forgetting passwords, and policy links without leaving the page.
- **Show/Hide password control** – The eye-toggle button reveals or masks the password fields in both login and sign-up views.
- **Localized footer** – Language selector and useful links emulate the real Instagram footer for added authenticity.

##  Project structure
```
Instagram-form/
├── index.html          # Disclaimer/landing page
├── index2.html         # Login form
├── index3.html         # Sign-up form
├── css/
│   ├── stil.css        # Styles for index.html
│   ├── stil2.css       # Styles for index2.html
│   └── stil3.css       # Styles for index3.html
├── javaScript/
│   ├── skripte2.js     # Login validation + alerts
│   └── skripte3.js     # Sign-up validation + alerts
├── img/                # Logos, favicon, and illustration assets
├── LICENSE             # Project license
└── README.md
```

##  Tech stack
- **HTML5** for the multi-page structure
- **CSS3** for responsive layouts and Instagram-like styling
- **Vanilla JavaScript** for validation logic and DOM interactions
- **[SweetAlert2](https://sweetalert2.github.io/)** (loaded via CDN) for polished modal dialogues

##  Validation rules
- **Login** (`index2.html`)
    - Allowed usernames: `test`, `test@gmail.com`, or `123456789`
    - Password must be exactly `Test1.` to unlock the Log in CTA
- **Sign up** (`index3.html`)
    - Contact field accepts either a valid email (`.com`, `.si`, `.org`) or a 9-digit phone number
    - Password needs at least 8 characters plus uppercase, lowercase, number, and special character
    - Username accepts only letters (no digits or spaces)
    - Successful submission displays a SweetAlert success modal and redirects back to the login page

##  License
Distributed under the terms described in `LICENSE`.
