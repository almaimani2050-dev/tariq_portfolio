// DARK MODE TOGGLE
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    toggleBtn.textContent = body.classList.contains("dark") ? "☀" : "🌙";
});

// CONTACT FORM VALIDATION
const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        errorMsg.textContent = "Name cannot be empty.";
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        errorMsg.textContent = "Enter a valid email address.";
        return;
    }
    if (message.length < 10) {
        errorMsg.textContent = "Message must be at least 10 characters.";
        return;
    }

    alert("Message sent successfully!");
    errorMsg.textContent = "";
    form.reset();
});
