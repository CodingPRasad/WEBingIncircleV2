var slides= document.getElementsByClassName("slider");
//slideIndex=1;
slideCount=slides.length;
function slideshow(){
    for(var i=1; i<slideCount;i++){
        slides.style.display="block";
    }
    i++;
    if(i>slideIndex){
        slideIndex=1;
}
    $(".slider fade").onload(function(){
        $(this).fadeIn('slow',.5);
        slideshow();
    })
}