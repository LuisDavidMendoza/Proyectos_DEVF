document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link, .linksHover');

    links.forEach(function(link) {
        link.addEventListener('click', function(event){
            event.preventDefault();

            links.forEach(otherLink => {
                otherLink.classList.remove('activeLink', 'activeIcon');
            });

            if (link.classList.contains('link')) {
                link.classList.add('activeLink');
            } else if (link.classList.contains('linksHover')) {
                link.classList.add('activeIcon');
            }
        });
    });
});