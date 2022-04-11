
let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
          // Uma string ou número que determina por quanto tempo a animação será executada.
          duration: 4000,
          // Uma string indicando qual função de atenuação usar para a transição.
          easing: "swing",
          /**
           * Uma função a ser chamada para cada propriedade animada de cada elemento animado.
           * Esta função oferece a oportunidade de
           * modifique o objeto Tween para alterar o valor da propriedade antes que ela seja definida.
           */
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  
  let a = 0;
  $(window).scroll(function () {
    // O método .offset() nos permite recuperar a posição atual de um elemento em relação ao documento
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });
  
  
  
  /**
   *
   *  navegação pegajosa
   *
   */
  
  let navbar = $(".navbar");
  
  $(window).scroll(function () {
    // obter a altura completa da janela
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      navbar.addClass("sticky");
    } else {
      navbar.removeClass("sticky");
    }
  });