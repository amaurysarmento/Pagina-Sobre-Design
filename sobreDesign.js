function OpenAndClose() {
    let menuBarClick = document.querySelector('.menuBar');
    
    menuBarClick.addEventListener('click', function() {
        const menuOpen = document.querySelector('nav');    
        menuOpen.classList.toggle('menuList');
        let NavbarAnimation = document.querySelector('.container-menu');
        NavbarAnimation.CSSAnimation('animation');
    })
}


/**
 * a classe .menuOut vai servir pra ser chamada pra retirar o menu da nav, fazendo a animação oposta que a do menu de entrada.
 */


// function NavOut() {
//     let animationClose = document.querySelector('.menuBar');
    
//     animationClose.addEventListener('click', function() {
//         const menuClose = document.querySelector('nav');    
//         menuClose.classList.toggle('menuList');
//         let NavbarOut = document.querySelector('.container-menu');
//         NavbarOut.CSSAnimation('animationOut');
//     })
// }
OpenAndClose();

