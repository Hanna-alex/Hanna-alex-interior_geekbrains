
 $(document).ready(function (){  
 let menuButton = document.querySelector('.menu-button');
  let menu = document.querySelector('.navbar-mobile');

  menuButton.addEventListener('click', function(){
    console.log('click'),
    menuButton.classList.toggle('menu-button__active'),
    menu.classList.toggle('navbar-mobile__active')
});


});