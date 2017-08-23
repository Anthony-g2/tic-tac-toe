// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  let turns = 1;

  $('.box').click(function(){
    if ($(this).is(':empty')){
      if (turns % 2 === 0&&($(this).is(':empty'))) {
        console.log('X\'s turn');
        $(this).text(`x`);
      } else if (turns % 2 != 0) {
        console.log('O\'s turn');
        $(this).text(`o`);
      };
      turns ++;
    } else if ($(this).is(':empty')===false){
      turns + 0;
    };
  });

  $('.reset').click(function(){
    $('.box').text(``);
    turns = 1 ;
  });

  

});
