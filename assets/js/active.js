(function ($){
    "use strict";
	
	//Pre LOader
    $("#loading").fadeOut(500);
	
	
	//Page Animation
	new WOW().init();

    /****Responsive Mean Menu Start ****/
    $('#mean-menu-active').meanmenu({
        meanMenuContainer: '.responsive-menu',
        meanScreenWidth: "575",
        
    
      });
    
    //Header Menu(Select Section-id)
    $("nav ul li:first-child > a").on("click", function(t) {
        var i = e(this.getAttribute("href"));
        i.length && (t.preventDefault(),
        $("html, body").stop().animate({
            scrollTop: i.offset().top - 80
        }, 1e3))
    });

    /** Menu Active Class */
    $("nav ul.main-menu li:first-child > a").addClass("active");

    $("ul.main-menu > li:first-child > a").addClass("active");

    $("ul.main-menu li a").on("click", function() {
        $("ul.main-menu li a").removeClass("active"),
        $(this).addClass("active");
    });

    new SlideNav({
        activeClass: "active",
        toggleButtonSelector: !1,
        toggleBoxSelector: !1,
        hideAfterSelect: !0,
        speed: 80,
        changeHash: !1,
        navBoxToggleClass: !1
    });
	
    //For Isotope Active
    
    // $('#container').imagesLoaded( function() {
        
    //   });
	var $grid = $('.working-thumb').isotope({
        itemSelector: ".working-item",
        parcentPosition: true,
        masonry: {
            columnWidth: 1
        }
    });
	//Filter Items On Button Click (For Isotope)
    $('.working-menu ul li').on('click', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
	});
	
	//For Menu Active Class (For Isotope)
    $('.working-menu ul li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
	
	
	//Brand-Carousel Active
    $('.brand-active').owlCarousel({
        autoplay:true,
        loop:true,
        nav:false,
        dots:false,
        margin:80,
        responsive:{
            0:{
                items:2
            },
            400:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:6
            },
            1200:{
                items:6
            }
        }
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	    
})(jQuery);