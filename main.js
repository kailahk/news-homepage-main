const menuIconEl = document.getElementById('menu-icon')
const navBarEl = document.getElementsByTagName('nav')
const xMenuIconEl = document.getElementById('menu-close-icon')

menuIconEl.addEventListener('click', handleMenuIconClick)
xMenuIconEl.addEventListener('click', handleCloseMenu)


function handleMenuIconClick(event) {
    navBarEl[0].style.visibility = 'visible'
}

function handleCloseMenu(event) {
    navBarEl[0].style.visibility = 'hidden'
}