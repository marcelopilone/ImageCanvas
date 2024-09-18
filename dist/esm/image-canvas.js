import { p as promiseResolve, b as bootstrapLazy } from './index-de00d12b.js';
export { s as setNonce } from './index-de00d12b.js';

/*
 Stencil Client Patch Browser v4.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["image-canvas",[[0,"image-canvas",{"width":[2],"height":[2],"canvasFillStyle":[1,"canvas-fill-style"],"layers":[16],"imgLoading":[32]}]]]], options);
});

//# sourceMappingURL=image-canvas.js.map