$(document).ready(function(){

  $(".next").click(immagineSuccessiva);
  
  $(".prev").click(immaginePrecedente);

  $(".next").click(pallinoSuccessivo);
  
  $(".prev").click(pallinoPrecedente);

  $(".nav i").click(clickPallino);
});

//Immagine successiva
function immagineSuccessiva(){

  var elementoImg = $(".images img.active");
  console.log(elementoImg);

  elementoImg.removeClass("active");

  if(elementoImg.hasClass("last")){
    $(".images img.first").addClass("active");
  } else {
    elementoImg.next().addClass("active");
  }
} 

//Immagine precedente
function immaginePrecedente(){
  
  var elementoImg = $(".images img.active");
  console.log(elementoImg);
  
  elementoImg.removeClass("active");
  
  if(elementoImg.hasClass("first")){
    $(".images img.last").addClass("active");
  } else {
    elementoImg.prev().addClass("active");
  }
}

//Pallino successivo
function pallinoSuccessivo(){

  var elementoPallino = $(".nav i.active");
  console.log(elementoPallino);

  elementoPallino.removeClass("active");

  if(elementoPallino.hasClass("last")){
    $(".nav i.first").addClass("active");
  } else {
    elementoPallino.next().addClass("active");
  }
} 

//Pallino precedente
function pallinoPrecedente(){

  var elementoPallino = $(".nav i.active");
  console.log(elementoPallino);

  elementoPallino.removeClass("active");

  if(elementoPallino.hasClass("first")){
    $(".nav i.last").addClass("active");
  } else {
    elementoPallino.prev().addClass("active");
  }
} 

//Bonus
//Cliccando sul pallino si seleziona l'immagine alla posizione selezionata

function clickPallino(){
  
  $(".active").removeClass("active");
  $(this).addClass("active");
  $("img").eq($(this).index()).addClass("active");
}