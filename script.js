document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("themeToggle");

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const responseDiv = document.getElementById("response");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("nameInput").value.trim();
        const email = document.getElementById("emailInput").value.trim();
        const subject = document.getElementById("subjectInput").value.trim();
        const message = document.getElementById("messageInput").value.trim();

        if (!name || !email || !subject || !message) {
            responseDiv.style.color = "red";
            responseDiv.innerText = "Please fill out all fields.";
        } else {
            responseDiv.style.color = "green";
            responseDiv.innerText = `Thanks, ${name}. We'll get back to you at ${email} soon!`;

            // Optionally clear the form
            form.reset();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {

    // Load users from API
    const loadUsersBtn = document.getElementById("loadUsersBtn");
    const userList = document.getElementById("userList");

    if (loadUsersBtn && userList) {
        loadUsersBtn.addEventListener("click", async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await res.json();
                userList.innerHTML = "";

                users.forEach(user => {
                    const userCard = document.createElement("div");
                    userCard.classList.add("user-card");

                    userCard.innerHTML = `
                        <h3>${user.name}</h3>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Company:</strong> ${user.company.name}</p>
                        <p><strong>City:</strong> ${user.address.city}</p>
                    `;

                    userList.appendChild(userCard);
                });
            } catch (err) {
                console.error("Failed to load users:", err);
                userList.innerHTML = "<p style='color: red;'>Failed to load team members.</p>";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // FAQ toggle
    document.querySelectorAll(".question").forEach((q) => {
        q.addEventListener("click", () => {
            q.nextElementSibling.classList.toggle("visible");
        });
    });
});


function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString(); // e.g., 14:32:18
    const clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

// Start the clock ticking
setInterval(updateClock, 1000);

// Call it once immediately so it doesn't wait 1 second to start
updateClock();

