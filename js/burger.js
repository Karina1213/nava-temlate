const toggleButton = document.getElementById('burgerMenu');
const navBar = document.getElementById('nav');

toggleButton.addEventListener('click', function () {
    navBar.classList.toggle('toggle');
});
