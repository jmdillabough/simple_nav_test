const light = document.querySelector('.light')
const dark = document.querySelector('.dark')
const body = document.querySelector('body')
const color = document.querySelector('.color')
const header = document.querySelector('header')

color.addEventListener('click', () => {
	body.classList.toggle('dark-body')
	header.classList.toggle('dark-header')

	dark.classList.toggle('inactive')
	light.classList.toggle('inactive')
})
