document.querySelector('.toggle-menu').addEventListener('pointerdown', function() {
    const img = this.querySelector('img');
    const src = img.getAttribute('src');
    img.setAttribute('src', img.dataset.src);
    img.dataset.src = src;
    document.querySelector('.main-nav').classList.toggle('open');
});