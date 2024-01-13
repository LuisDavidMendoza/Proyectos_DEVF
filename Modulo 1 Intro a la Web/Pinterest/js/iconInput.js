document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('input-search');
    const finder = document.getElementById('finder');
    const searchIcon = document.getElementById('icon-search');
    const clearIcon = document.getElementById('icon-close');

    clearIcon.style.display = 'none';

    searchInput.addEventListener('click', () => {
        searchInput.style.paddingLeft = '16px';
        searchIcon.style.display = 'none';
        clearIcon.style.display = 'flex';
    });

    clearIcon.addEventListener('click', () => {
        finder.value = '';
        searchInput.style.paddingLeft = '0';
        searchIcon.style.display = 'block';
        clearIcon.style.display = 'none';
    });
});
