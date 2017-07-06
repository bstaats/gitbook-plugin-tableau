module.exports = {
  book: {
    assets: "./assets",
    js: ["tableau-2.js", "tableau-2.2.0.js", "plugin.js", "jsonfn.js"]
  },
  blocks: {
    tableau: {
      process: function(blk) {

        if(blk.args.length != 1) throw Error('Tableau plugin requires only one parameter. A URL to a Tableau workbook');

        let opts = {};

        try{
          opts = JSON.parse(blk.body.trim());
        }catch (e){
          console.warn("No options for Tableau URL: "+blk.args[0]);
        }

        var w = opts.width || '100%';
        var h = opts.height || '100%';

        return '<div class="tableau-container" width="'+w+'" height="'+h+'" data-url="'+blk.args[0]
              +'"><div class="tableau-container-options" style="display:none;">'+JSON.stringify(opts)+'</div><div>';

     }
    }
  }
};
