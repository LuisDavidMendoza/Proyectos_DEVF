document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('input-search');
    const clearIcon = document.getElementById('icon-close');
    const lineVertical = document.getElementById('line-vertical');
    const iconsHidden = [clearIcon, lineVertical]

    const iconsShowHidden = (showHidden) => {
        iconsHidden.forEach(e => {
            e.style.visibility = showHidden    
        })
    }

    searchInput.addEventListener('input', () => {
        searchInput.value === '' ? iconsShowHidden('hidden') : iconsShowHidden('visible');
    });

    clearIcon.addEventListener('click', () => {
        searchInput.value = '';
        iconsShowHidden('hidden');
    });

    iconsShowHidden('hidden');
});