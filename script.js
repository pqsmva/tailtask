const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
document.addEventListener('DOMContentLoaded', function() {
 
    const infoBoxes = document.querySelectorAll('.info-box');
    const moreInfos = document.querySelectorAll('.more-info');

    infoBoxes.forEach((box, index) => {
        box.addEventListener('click', function() {
          
            const opened = document.querySelector('.more-info:not(.hidden)');
            const currentMoreInfo = moreInfos[index];

            if (opened && opened !== currentMoreInfo) {
             
                opened.classList.add('hidden');
                const imageBox = opened.previousElementSibling;
                imageBox.classList.remove('h-80');
                imageBox.classList.add('h-40');
            }

            if (currentMoreInfo.classList.contains('hidden')) {
                currentMoreInfo.classList.remove('hidden');
                const imageBox = currentMoreInfo.previousElementSibling;
                imageBox.classList.remove('h-40');
                imageBox.classList.add('h-80');
            } else {
                currentMoreInfo.classList.add('hidden');
                const imageBox = currentMoreInfo.previousElementSibling;
                imageBox.classList.remove('h-80');
                imageBox.classList.add('h-40');
            }
        });
    });
});
