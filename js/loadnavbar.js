document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    fetch('../html/navbar.html')  // Adjusted path to match the new structure
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
