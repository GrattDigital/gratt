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



    // let servises = document.querySelector('.servises__wrap');

    // let servisesItem = document.querySelector('.servises__item');
    // servisesItem.addEventListener('touchstart', function(event) {
    //   event.preventDefault();
    //   console.log(servisesItem);
    //   return(servisesItem);

    // });


  };

});



// $('.size a').on('click', function (e) {     
//                     e.preventDefault();

//                     $(this).removeClass("checked");
//                     $(this).slideToggle();  
//                  $(this).toggleClass('checked').removeClass('checked');

//                 });
