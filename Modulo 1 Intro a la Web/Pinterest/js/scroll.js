const addShadowBox = document.getElementById('navbar-pinterest');

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function() {
        var scrollY = window.scrollY;
        scrollY === 0 ? addShadowBox.classList.remove('navbarShadow') : addShadowBox.classList.add('navbarShadow')
    });
});
