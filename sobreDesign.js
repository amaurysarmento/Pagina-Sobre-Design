let menuBar = document.querySelector('.menuBar');

menuBar.addEventListener('click', function() {
    const menuOpen = document.querySelector('nav');    
    menuOpen.classList.toggle('menuList');
})

