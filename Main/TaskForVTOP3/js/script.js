const langBtn = document.querySelector('#lang-button');
// console.log(langBtn);
// const modifiedItem = document.createElement('span');
// modifiedItem.textContent = 'RU';
// langBtn.addEventListener('click', (event) => {
//     console.log('event listener ' + event.currentTarget);
//     console.log(langBtn.innerHTML);
//     //langBtn.replaceChild(modifiedItem, langBtn.span);
//     //langBtn.textContent = 'RU';
//     langBtn.innerHTML = `
//         <a href="#">
//             <img src="./icons/Planet.png" alt="lang">
//             <span>RU</span>
//         </a>
//     `;
// });

$('#lang-button').on('click', function (button) {
    button.preventDefault();
    console.log($(this.childNodes));
    console.log('20');
    // if ($(this).hasClass('ru')) {

    //     $(this).toggleClass('ru en').text('EN');
    //     //loadNewLang('en');
    // } else if ($(this).hasClass('en')) {
    //     $(this).toggleClass('en ru').text('RU');
    //     //loadNewLang('ru');
    // }
});

