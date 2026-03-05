$(document).ready(function() {

  $("#content").load("./home.html", function() {
      iniciarCarrusel();
  });

  $("#inicio-button").on("click", function() {
      $("#content").load("./home.html", function() {
          iniciarCarrusel();
      });
  });

  $("#federacion-button").on("click", function() {
    $("#content").load("./federacion.html"); // Carga federacion.html
  });

  $("#docu-button").on("click", function() {
    $("#content").load("./documentos.html"); // Carga documentos.html
  });

  $("#teoria-button").on("click", function() {  
    $("#content").load("./teoria.html"); // Carga teoria.html
  });
});