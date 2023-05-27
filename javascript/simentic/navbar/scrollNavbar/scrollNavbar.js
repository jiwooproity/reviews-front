const navbar = document.querySelector('.navbar');

const onScroll = (e) => {
    const scrollTop = window.scrollY;
    navbar.classList[scrollTop > 0 ? 'add' : 'remove']('scrolling');
}

document.addEventListener('scroll', onScroll);