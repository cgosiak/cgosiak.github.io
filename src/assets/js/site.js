$(document).ready(function () {

  getProjects();

  // Link in MDL Drawer is Clicked
  $('.drawer_link').click(function () {
    closeMDLDrawer();
  });

  function closeMDLDrawer() {
    $('.mdl-layout__drawer').toggleClass('is-visible');
    $('.mdl-layout__obfuscator').toggleClass('is-visible');
  }

  function getProjects() {
    $.ajax({
      type: "GET",
      url: "https://api.github.com/users/cgosiak/repos",
      async: true,
      success: function (response) {
		for (i=0; i < response.length; i++) {
			console.log("Object: " + JSON.stringify(response[i].name));
		}
      }
    });
  }

});
