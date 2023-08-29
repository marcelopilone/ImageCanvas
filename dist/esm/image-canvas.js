import { p as promiseResolve, b as bootstrapLazy } from './index-cca9a969.js';
export { s as setNonce } from './index-cca9a969.js';

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
  return bootstrapLazy([["image-canvas",[[0,"image-canvas",{"bgImg":[1,"bg-img"],"wCanvas":[2,"w-canvas"],"hCanvas":[2,"h-canvas"],"canvasFillStyle":[1,"canvas-fill-style"],"fontCanvas":[1,"font-canvas"],"content":[16],"imgLoading":[32]}]]]], options);
});

//# sourceMappingURL=image-canvas.js.map