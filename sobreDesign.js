function OpenAndClose() {
    let menuBar = document.querySelector('.menuBar');
    
    menuBar.addEventListener('click', function() {
        const menuOpen = document.querySelector('nav');    
        menuOpen.classList.toggle('menuList');
        let NavbarAnimatio = document.querySelector('.container-menu');
        NavbarAnimatio.CSSAnimation('animation');
    })
}
OpenAndClose();


