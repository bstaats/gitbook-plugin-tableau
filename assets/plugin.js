require(["gitbook", "jQuery"], function(gitbook, $) {
  gitbook.events.bind("page.change", function(e, config) {

      $('.tableau-container').each(function(){

        var url = $(this).attr('data-url')+'?';
        url += $(this).attr('data-parameters') ? $(this).attr('data-parameters') : 'showVizHome=no&display_spinner=no&animate_transition=yes&tabs=no&embed=y';

        var options = $(this).attr('data-options') != undefined ? JSON.parse($(this).attr('data-options')) : {"hideTabs":true,"hideToolbar":true};
        options.width =  $(this).attr('width') || "100%"
        options.height = $(this).attr('height') || "100%",

        viz = new tableauSoftware.Viz(this, url, options);

      });
  });
});
