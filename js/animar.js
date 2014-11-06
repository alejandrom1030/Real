$(document).ready(function(){

    // Fill in the blanks!
    $(".fa-chevron-down").animate({ top: '+=90%' } , 0);
   
    function animar(){

    $(".fa-chevron-down").animate({ top: '+=3%' } , 1000, function(){
    $(".fa-chevron-down").animate({ top: '-=3%' } , 1000);
    animar();
    });
    }
    animar();
});