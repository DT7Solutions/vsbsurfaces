(function($) { "use strict";
	
	// --------------------------------------------------
    // owlCarousel
    // --------------------------------------------------

    /* latest-projects-items */
    $("#related-products").owlCarousel({
        items: 4,
        itemsCustom : false,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [979, 2],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        navigation: true,
        pagination:false,
        navigationText:[
          "<i class='fa fa-angle-left'</i>",
          "<i class='fa fa-angle-right'</i>",
        ],
    });

    $(".our-client-works-slider").owlCarousel({
      items: 3,
      itemsCustom : false,
      itemsDesktop : [1199, 3],
      itemsDesktopSmall : [979, 2],
      itemsTablet : [768, 2],
      itemsTabletSmall : false,
      itemsMobile : [479, 1],
      navigation: true,
      pagination: false,
      navigationText: [
        "<i class='fa fa-arrow-left'</i>",
        "<i class='fa fa-arrow-right'</i>",
        
      ],
});


$(".our-natural-stone-slider").owlCarousel({
  items:3,
  itemsCustom:false,
  itemsDesktop:[1199,3],
  itemsDesktopSmall:[979, 2],
  itemsTablet:[768, 2],
  itemsTabletSmall:false,
  itemsMobile:[479,1],
  navigation:true,
  pagination: false,
  navigationText: [
    "<i class='fa fa-arrow-left'></i>",
    "<i class='fa fa-arrow-right'></i>"
  ],
});
    
})(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	