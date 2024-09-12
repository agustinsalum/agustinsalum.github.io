document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mobile-menu').addEventListener('click', function() {
        console.log('clic');
        /* Nav class name --> menu */
        let menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    });
});