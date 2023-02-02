const fs = require('fs-extra');
    const concat = require('concat');
    
    build = async () =>{
        const files = [
            './dist/sunbird-generic-editor-elements/runtime.js',
            './dist/sunbird-generic-editor-elements/polyfills.js',
            './dist/sunbird-generic-editor-elements/main.js'
          ];
        
          await fs.ensureDir('examples');
          await concat(files, 'examples/sunbird-generic-editor.js');
    }
    build();