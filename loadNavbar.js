document.addEventListener("DOMContentLoaded", function() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        // Determine the correct path to navbar.html
        let path = window.location.pathname;
        let depth = (path.match(/\//g) || []).length - 1; // Count the number of slashes to determine depth
        let relativePath = '../'.repeat(depth) + 'navbar.html'; // Adjust the relative path based on depth

        fetch(relativePath)
            .then(response => response.text())
            .then(data => {
                navbarPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading the navbar:', error));
    }
});
