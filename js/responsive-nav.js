jQuery(document).ready(function(){
	
	
	jQuery('#nav-button').click(function() {
			jQuery('#options').show();
	},function() {
			jQuery('#options').hide();
	});
	
	if ( jQuery(window).width() < 959) {
	jQuery('#options li a').click(function() {
			jQuery('#options').hide();
	});
	}
	
	jQuery(window).resize(function() {
  if ( jQuery(window).width() < 959) {
	jQuery('#options li a').click(function() {
			jQuery('#options').hide();
	});
	}
	});
	
	jQuery(window).resize(function() {
  if ( jQuery(window).width() > 959) {
			jQuery('#options').show();
			jQuery('#options li a').click(function() {
			jQuery('#options').show();
	});
	}
	});
	
});	
	