$(document).ready(function () {

	// Link in MDL Drawer is Clicked
    $('.mdl-navigation__link').click(function() {
		closeMDLDrawer();
	});

	// Home Link in drawer is clicked
	$('#home-drawer-link').click(function() {
		closeMDLDrawer();
	});

	function closeMDLDrawer() {
		$('.mdl-layout__drawer').toggleClass('is-visible');
		$('.mdl-layout__obfuscator').toggleClass('is-visible');
	}

});
