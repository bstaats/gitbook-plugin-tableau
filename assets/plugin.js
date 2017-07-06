require(["gitbook", "jQuery"], function(gitbook, $) {

  function setupTableau($container){
    let opts = null;
    let optsContainer = $container.find('.tableau-container-options');

    try{
      opts = JSONfn.parse(optsContainer.text());
    }catch (e){
      console.error("Could not parse these Tableau options: "+$container[0]);
    }

    $(optsContainer).remove();

    let defaults = {hideTabs:true, hideToolbar:true, width: "100%", height: "100%"};

    viz = new tableauSoftware.Viz($container[0], $container.attr('data-url'), $.extend(defaults, opts));
  }


  gitbook.events.bind("page.change", function(e, config) {
      gitbook.state.$book.find('.tableau-container').each(function(){
        setupTableau($(this));
      });
  });
});
