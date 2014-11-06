$(document).ready(function() {

    $('#fullpage').fullpage({
       
        
        anchors:['Esto-es-lo-que-hacemos', 'Mas'],
        scrollingSpeed: 600,
        easing: 'easeInQuart',
        
        navigation: false,
        slidesNavigation:false,
        
        
        autoScrolling: true,
        scrollOverflow: true,
        css3: false,
        
        
        keyboardScrolling: true,
        touchSensitivity: 15,
        continuousVertical: false,
        animateAnchor: true,
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });

  

     
});