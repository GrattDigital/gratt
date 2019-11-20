/*eslint-env jquery*/
window.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('html').classList.contains('touchevents')) {
    let servisesItem = document.querySelectorAll('.servises__item');
    $(servisesItem).on('touchstart', function(event) {
      event.preventDefault();
      $('.servises__active').removeClass('servises__active');
      $(this).addClass('servises__active');
      // $(this).toggleClass('servises__active').removeClass('servises__active');
      console.log('проверка');
    });



  };

});

