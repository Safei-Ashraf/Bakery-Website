//Adding tooggle logic to display menu Icons:
const hamburgerMenu = document.querySelector('.hamburger-menu');
const toggler = document.querySelectorAll('.toggle')

hamburgerMenu.addEventListener('click', function(){
    toggler.forEach( icon => { icon.classList.toggle('open')})
});