const langBtn = document.querySelector('#lang-button');
const langSpan = document.querySelectorAll('.lang');


langBtn.addEventListener('click', () => {
    langSpan.forEach(item => {
        item.classList.contains('hide')
            ? item.classList.remove('hide')
            : item.classList.add('hide');
    });
});
