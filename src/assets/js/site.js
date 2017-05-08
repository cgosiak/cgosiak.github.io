$(document).ready(function () {

  // Link in MDL Drawer is Clicked
  $('.drawer_link').click(function () {
    closeMDLDrawer();
  });

  function closeMDLDrawer() {
    $('.mdl-layout__drawer').toggleClass('is-visible');
    $('.mdl-layout__obfuscator').toggleClass('is-visible');
  }

});
