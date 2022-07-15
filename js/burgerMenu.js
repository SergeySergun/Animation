let burger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.header-nav-burger');


burger.addEventListener('click', function(){
    burgerMenu.classList.toggle('active');
    burger.classList.toggle('activeBurg');
    burger.classList.toggle('burgerActivePosition');
})


