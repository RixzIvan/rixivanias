document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });

    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const comments = document.getElementById('comments').value.trim();
        const errorDiv = document.getElementById('error');
        errorDiv.textContent = '';

        if (comments.length < 10) {
            errorDiv.textContent = 'Comments must be at least 10 characters long.';
            event.preventDefault();
        }
    });

    document.getElementById('eventForm').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const eventDate = document.getElementById('eventDate').value;
        const eventTime = document.getElementById('eventTime').value;
        const errorDiv = document.getElementById('error');
        errorDiv.textContent = '';

       
        if (!name || !email || !eventDate || !eventTime) {
            errorDiv.textContent = 'All fields are required.';
            event.preventDefault();
            return;
        }

        
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        const timePattern = /^\d{2}:\d{2}$/;

        if (!datePattern.test(eventDate)) {
            errorDiv.textContent = 'Invalid date format.';
            event.preventDefault();
            return;
        }

        if (!timePattern.test(eventTime)) {
            errorDiv.textContent = 'Invalid time format.';
            event.preventDefault();
        }
    });
});

