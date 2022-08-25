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