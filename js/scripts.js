window.addEventListener('load', function(){
new Glider(document.querySelector('.contenitore-cards'), {
    slidesToScroll: 1,
    slidesToShow: 7,
    draggable: true,
    slidesToShow: 'auto',
    itemWidth: 200,
    exactWidth: true,
    });
})

const navigazione = document.querySelector('.nagivazione-mobile');

function ToggleNavigazione() {

    if (navigazione.classList.contains('animate__slideOutLeft')) {

        navigazione.classList.add('animate__slideInLeft');
        navigazione.classList.remove('animate__slideOutLeft');

      } else if (navigazione.classList.contains('animate__slideInLeft')) {

        navigazione.classList.add('animate__slideOutLeft');

      } else {

        navigazione.classList.add('animate__slideOutLeft');
        navigazione.style.display = 'block';

      }
}
