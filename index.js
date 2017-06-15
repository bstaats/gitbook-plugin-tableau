module.exports = {
  book: {
    assets: "./assets",
    js: ["tableau-2.js", "tableau-2.2.0.js", "plugin.js"]
  },
  blocks: {
    tableau: {
      process: function(blk) {

        if(blk.body.trim()==''){
          throw Error('Required Tableau URL inside tag body');
        }
        var u = 'data-url="'+blk.body.trim()+'" ';
        var w = blk.kwargs.width || '100%';
        var h = blk.kwargs.height || '100%';
        var o = blk.kwargs.options ? "data-options='"+blk.kwargs.options+"' " : ' ';
        var p = blk.kwargs.parameters ? 'data-parameters="'+blk.kwargs.parameters+'"' : '';

        return '<div class="tableau-container" width="'+w+'" height="'+h+'" '+u+o+p+'><div>';
     }
    }
  }
};
