'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9f2ec241.js');

/*
 Stencil Client Patch Browser v4.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('image-canvas.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["image-canvas.cjs",[[0,"image-canvas",{"wCanvas":[2,"w-canvas"],"hCanvas":[2,"h-canvas"],"wImageBg":[2,"w-image-bg"],"hImageBg":[2,"h-image-bg"],"canvasFillStyle":[1,"canvas-fill-style"],"fontCanvas":[1,"font-canvas"],"content":[16],"imgLoading":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=image-canvas.cjs.js.map