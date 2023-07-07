let menuBar = document.querySelector('.menuBar');

menuBar.addEventListener('click', function() {
    const menuOpen = document.querySelector('.menuList');
    
    menuOpen.classList.toggle('menuBlock');
})

