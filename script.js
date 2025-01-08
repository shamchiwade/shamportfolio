
        // JavaScript function to validate email and password
        function validateLogin() {
            
            const email = document.getElementById("user").value;
            const password = document.getElementById("password").value;

            
            const validEmail = "chiwadesham3742@gmail.com";
            const validPassword = "sham123";

            
            if (email === validEmail && password === validPassword) {
                alert("email and password macthed you can login click ok")
                
                window.location.href = "./home.html";
            } else {
                alert("Invalid email or password. Please try again.");
            }
        }
        function toggleText() {
            const extraText = document.getElementById('extra-text');
            const button = document.getElementById('read-more-btn');
            if (extraText.style.display === 'none' || extraText.style.display === '') {
                extraText.style.display = 'block'; // Show the hidden text
                button.textContent = 'Read Less'; // Change button text
            } else {
                extraText.style.display = 'none'; // Hide the text
                button.textContent = 'Read More'; // Reset button text
            }
        }
        function downloadCV() {
            // URL to the CV file
            const cvURL = "cv/Sham Chiwade (Java).pdf"; // Replace with your actual file path or URL
        
            // Create an anchor element
            const anchor = document.createElement("a");
            anchor.href = cvURL; // Set the file URL
            anchor.download = "cv/Sham Chiwade (Java).pdf"; // Set the default download file name
            anchor.click(); // Trigger a click event programmatically
        }
       
        
        // JavaScript for Contact Section

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Get the form element
    const contactForm = document.querySelector(".form-container");

    // Add a submit event listener to the form
    contactForm.addEventListener("submit", (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get form inputs
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate form inputs
        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting the form.");
            return;
        }

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Show confirmation and submit the form
        if (confirm("Are you sure you want to send this message?")) {
            contactForm.submit();
        }
    });
});
