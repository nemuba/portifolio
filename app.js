$('nav a').click(function(e){
  // prevenindo o padrão do click
  e.preventDefault();

  // pegando o valor do id do alvo
  var id = $(this).attr('href');

  // pegando a distância do alvo
  var heigthTop = $(id).offset().top;
  var heightMenu = $('nav').innerHeight();

  $('html,body').animate({
    scrollTop: heigthTop - heightMenu
  }, 500);
  
})