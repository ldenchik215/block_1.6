const brandsBtn = document.getElementById('show-all-btn-brands')
const cardBradsList = document.querySelector('.cards-brands')


brandsBtn.addEventListener('click', () => {
	brandsBtn.classList.toggle('read-more-btn--open')
	cardBradsList.classList.toggle('cards-brands--show-all')
})