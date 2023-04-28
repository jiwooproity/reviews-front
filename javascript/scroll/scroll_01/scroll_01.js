const navbarItems = document.querySelectorAll('li');

for(const navbar of navbarItems) {
    navbar.addEventListener('click', function() {
        const scrollPosition = document.querySelector(this.dataset.target).offsetTop;

        window.scrollTo({top: scrollPosition, behavior: 'smooth'})
    })
}