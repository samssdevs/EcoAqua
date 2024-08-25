document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    fetch('navbar.html')  // Adjusted path to match the new structure
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data;
            setActiveNavLink();
        })
        .catch(error => {
            console.error('Error loading the navigation bar:', error);
        });
});

function setActiveNavLink() {
    const links = document.querySelectorAll('.navbar a');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
// loadnavbar.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Attempting to load navbar...');
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log('Navbar loaded successfully');
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
});
