/* Collin - script.js */

// Add an event listener to the contact form
// This script provides a simple confirmation alert upon submission attempt.
// It prevents the default form submission, which is suitable for a static example.

document.addEventListener('DOMContentLoaded', function() {
    // Find the form element by its ID
    const contactForm = document.getElementById('contactForm');

    // Check if the form exists on the current page
    if (contactForm) {
        // Add an event listener for the 'submit' event
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Optional: You could add form validation logic here
            // For example, check if the name field is filled out

            // Display a simple alert message
            alert('Thank you for your message! (Form submission is disabled in this example)');

            // Optionally, reset the form after showing the alert
            // contactForm.reset();
        });
    }
});