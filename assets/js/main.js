const changeClass = (el, method, className) => el.classList[method](className)

const showMenu = (headerToggle, navbarId) => {
	const toggleBtn = document.getElementById(headerToggle)
	const navbar = document.getElementById(navbarId)

	if (toggleBtn && navbar) {
		toggleBtn.addEventListener('click', () => {
			changeClass(navbar, 'toggle', 'show-menu')
			changeClass(toggleBtn.querySelector('.header__icon'), 'toggle', 'bx-x')
		})
	}
}

showMenu('header-toggle', 'navbar')

const linkColor = document.querySelectorAll('.nav__link')

function colorLink(event) {
	event.preventDefault()
	linkColor.forEach(l => changeClass(l, 'remove', 'active'))
	changeClass(this, 'add', 'active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))