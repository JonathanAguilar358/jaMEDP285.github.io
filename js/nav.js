const hamburger = document.querySelector('.hamburger')
const dropdownMenu = document.querySelector('.dropdown_menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    dropdownMenu.classList.toggle('is-active')
} )
