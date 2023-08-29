'use strict';

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

const NAMESPACE = 'image-canvas';

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 *
 * Modified for Stencil's renderer and slot projection
 */
let queuePending = false;
const createTime = (fnName, tagName = '') => {
    {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    {
        return () => {
            return;
        };
    }
};
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
/**
 * Check whether a value is a 'complex type', defined here as an object or a
 * function.
 *
 * @param o the value to check
 * @returns whether it's a complex type or not
 */
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
/**
 * Helper method for querying a `meta` tag that contains a nonce value
 * out of a DOM's head.
 *
 * @param doc The DOM containing the `head` to query against
 * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag
 * exists or the tag has no content.
 */
function queryNonceMetaTagContent(doc) {
    var _a, _b, _c;
    return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('content')) !== null && _c !== void 0 ? _c : undefined;
}
/**
 * Parse a new property value for a given property type.
 *
 * While the prop value can reasonably be expected to be of `any` type as far as TypeScript's type checker is concerned,
 * it is not safe to assume that the string returned by evaluating `typeof propValue` matches:
 *   1. `any`, the type given to `propValue` in the function signature
 *   2. the type stored from `propType`.
 *
 * This function provides the capability to parse/coerce a property's value to potentially any other JavaScript type.
 *
 * Property values represented in TSX preserve their type information. In the example below, the number 0 is passed to
 * a component. This `propValue` will preserve its type information (`typeof propValue === 'number'`). Note that is
 * based on the type of the value being passed in, not the type declared of the class member decorated with `@Prop`.
 * ```tsx
 * <my-cmp prop-val={0}></my-cmp>
 * ```
 *
 * HTML prop values on the other hand, will always a string
 *
 * @param propValue the new value to coerce to some type
 * @param propType the type of the prop, expressed as a binary number
 * @returns the parsed/coerced value
 */
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 2 /* MEMBER_FLAGS.Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* MEMBER_FLAGS.String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getElement = (ref) => (getHostRef(ref).$hostElement$ );
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */
const emitEvent = (elm, name, opts) => {
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const rootAppliedStyles = /*@__PURE__*/ new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructableStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        if (typeof style === 'string') {
            style = cssText;
        }
        else {
            style.replaceSync(cssText);
        }
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode) => {
    var _a;
    const scopeId = getScopeId(cmpMeta);
    const style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* NODE_TYPE.DocumentFragment */ ? styleContainerNode : doc;
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    styleElm = doc.createElement('style');
                    styleElm.innerHTML = style;
                    // Apply CSP nonce to the style tag if it exists
                    const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
                    if (nonce != null) {
                        styleElm.setAttribute('nonce', nonce);
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    addStyle(elm.getRootNode(), cmpMeta);
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + (cmp.$tagName$);
const attachToAncestor = (hostRef, ancestorComponent) => {
    if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise((r) => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* HOST_FLAGS.isQueuedForUpdate */;
    }
    if (hostRef.$flags$ & 4 /* HOST_FLAGS.isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* HOST_FLAGS.needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return writeTask(dispatch) ;
};
/**
 * Dispatch initial-render and update lifecycle hooks, enqueuing calls to
 * component lifecycle methods like `componentWillLoad` as well as
 * {@link updateComponent}, which will kick off the virtual DOM re-render.
 *
 * @param hostRef a reference to a host DOM node
 * @param isInitialLoad whether we're on the initial load or not
 * @returns an empty Promise which is used to enqueue a series of operations for
 * the component
 */
const dispatchHooks = (hostRef, isInitialLoad) => {
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance = hostRef.$lazyInstance$ ;
    // We're going to use this variable together with `enqueue` to implement a
    // little promise-based queue. We start out with it `undefined`. When we add
    // the first function to the queue we'll set this variable to be that
    // function's return value. When we attempt to add subsequent values to the
    // queue we'll check that value and, if it was a `Promise`, we'll then chain
    // the new function off of that `Promise` using `.then()`. This will give our
    // queue two nice properties:
    //
    // 1. If all functions added to the queue are synchronous they'll be called
    //    synchronously right away.
    // 2. If all functions added to the queue are asynchronous they'll all be
    //    called in order after `dispatchHooks` exits.
    let maybePromise;
    if (isInitialLoad) {
        {
            // If `componentWillLoad` returns a `Promise` then we want to wait on
            // whatever's going on in that `Promise` before we launch into
            // rendering the component, doing other lifecycle stuff, etc. So
            // in that case we assign the returned promise to the variable we
            // declared above to hold a possible 'queueing' Promise
            maybePromise = safeCall(instance, 'componentWillLoad');
        }
    }
    endSchedule();
    return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
/**
 * This function uses a Promise to implement a simple first-in, first-out queue
 * of functions to be called.
 *
 * The queue is ordered on the basis of the first argument. If it's
 * `undefined`, then nothing is on the queue yet, so the provided function can
 * be called synchronously (although note that this function may return a
 * `Promise`). The idea is that then the return value of that enqueueing
 * operation is kept around, so that if it was a `Promise` then subsequent
 * functions can be enqueued by calling this function again with that `Promise`
 * as the first argument.
 *
 * @param maybePromise either a `Promise` which should resolve before the next function is called or an 'empty' sentinel
 * @param fn a function to enqueue
 * @returns either a `Promise` or the return value of the provided function
 */
const enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn) : fn();
/**
 * Check that a value is a `Promise`. To check, we first see if the value is an
 * instance of the `Promise` global. In a few circumstances, in particular if
 * the global has been overwritten, this is could be misleading, so we also do
 * a little 'duck typing' check to see if the `.then` property of the value is
 * defined and a function.
 *
 * @param maybePromise it might be a promise!
 * @returns whether it is or not
 */
const isPromisey = (maybePromise) => maybePromise instanceof Promise ||
    (maybePromise && maybePromise.then && typeof maybePromise.then === 'function');
/**
 * Update a component given reference to its host elements and so on.
 *
 * @param hostRef an object containing references to the element's host node,
 * VDom nodes, and other metadata
 * @param instance a reference to the underlying host element where it will be
 * rendered
 * @param isInitialLoad whether or not this function is being called as part of
 * the first render cycle
 */
const updateComponent = async (hostRef, instance, isInitialLoad) => {
    var _a;
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    {
        callRender(hostRef, instance);
    }
    if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb) => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = (_a = elm['s-p']) !== null && _a !== void 0 ? _a : [];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* HOST_FLAGS.isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
/**
 * Handle making the call to the VDom renderer with the proper context given
 * various build variables
 *
 * @param hostRef an object containing references to the element's host node,
 * VDom nodes, and other metadata
 * @param instance a reference to the underlying host element where it will be
 * rendered
 * @param elm the Host element for the component
 * @param isInitialLoad whether or not this function is being called as part of
 * @returns an empty promise
 */
const callRender = (hostRef, instance, elm, isInitialLoad) => {
    try {
        instance = instance.render && instance.render();
        {
            hostRef.$flags$ &= ~16 /* HOST_FLAGS.isQueuedForUpdate */;
        }
        {
            hostRef.$flags$ |= 2 /* HOST_FLAGS.hasRendered */;
        }
    }
    catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    return null;
};
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const ancestorComponent = hostRef.$ancestorComponent$;
    if (!(hostRef.$flags$ & 64 /* HOST_FLAGS.hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* HOST_FLAGS.hasLoadedComponent */;
        {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        endPostUpdate();
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* HOST_FLAGS.needsRerender */) {
            nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(4 /* HOST_FLAGS.isWaitingForChildren */ | 512 /* HOST_FLAGS.needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    {
        addHydratedFlag(doc.documentElement);
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }));
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const addHydratedFlag = (elm) => elm.classList.add('hydrated')
    ;
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    // explicitly check for NaN on both sides, as `NaN === NaN` is always false
    const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
    const didValueChange = newVal !== oldVal && !areBothNaN;
    if ((!(flags & 8 /* HOST_FLAGS.isConstructingInstance */) || oldVal === undefined) && didValueChange) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
            if ((flags & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
/**
 * Attach a series of runtime constructs to a compiled Stencil component
 * constructor, including getters and setters for the `@Prop` and `@State`
 * decorators, callbacks for when attributes change, and so on.
 *
 * @param Cstr the constructor for a component that we need to process
 * @param cmpMeta metadata collected previously about the component
 * @param flags a number used to store a series of bit flags
 * @returns a reference to the same constructor passed in (but now mutated)
 */
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if (cmpMeta.$members$) {
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
            if ((memberFlags & 31 /* MEMBER_FLAGS.Prop */ ||
                    ((flags & 2 /* PROXY_FLAGS.proxyState */) && memberFlags & 32 /* MEMBER_FLAGS.State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
        });
        if ((flags & 1 /* PROXY_FLAGS.isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    //  In a web component lifecycle the attributeChangedCallback runs prior to connectedCallback
                    //  in the case where an attribute was set inline.
                    //  ```html
                    //    <my-component some-attribute="some-value"></my-component>
                    //  ```
                    //
                    //  There is an edge case where a developer sets the attribute inline on a custom element and then
                    //  programmatically changes it before it has been upgraded as shown below:
                    //
                    //  ```html
                    //    <!-- this component has _not_ been upgraded yet -->
                    //    <my-component id="test" some-attribute="some-value"></my-component>
                    //    <script>
                    //      // grab non-upgraded component
                    //      el = document.querySelector("#test");
                    //      el.someAttribute = "another-value";
                    //      // upgrade component
                    //      customElements.define('my-component', MyComponent);
                    //    </script>
                    //  ```
                    //  In this case if we do not unshadow here and use the value of the shadowing property, attributeChangedCallback
                    //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
                    //  to the value that was set inline i.e. "some-value" from above example. When
                    //  the connectedCallback attempts to unshadow it will use "some-value" as the initial value rather than "another-value"
                    //
                    //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/unshadowed
                    //  by connectedCallback as this attributeChangedCallback will not fire.
                    //
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                    //
                    //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
                    //  properties here given that this goes against best practices outlined here
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy
                    if (this.hasOwnProperty(propName)) {
                        newValue = this[propName];
                        delete this[propName];
                    }
                    else if (prototype.hasOwnProperty(propName) &&
                        typeof this[propName] === 'number' &&
                        this[propName] == newValue) {
                        // if the propName exists on the prototype of `Cstr`, this update may be a result of Stencil using native
                        // APIs to reflect props as attributes. Calls to `setAttribute(someElement, propName)` will result in
                        // `propName` to be converted to a `DOMString`, which may not be what we want for other primitive props.
                        return;
                    }
                    this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* MEMBER_FLAGS.HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ((hostRef.$flags$ & 32 /* HOST_FLAGS.hasInitializedComponent */) === 0) {
        // Let the runtime know that the component has been initialized
        hostRef.$flags$ |= 32 /* HOST_FLAGS.hasInitializedComponent */;
        {
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if (!Cstr.isProxied) {
                proxyComponent(Cstr, cmpMeta, 2 /* PROXY_FLAGS.proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* HOST_FLAGS.isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* HOST_FLAGS.isConstructingInstance */;
            }
            endNewInstance();
        }
        if (Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            const scopeId = getScopeId(cmpMeta);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent['s-rc']) {
        // this is the initial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const fireConnectedCallback = (instance) => {
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* HOST_FLAGS.hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* HOST_FLAGS.hasConnected */;
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* MEMBER_FLAGS.Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        else {
            // fire off connectedCallback() on component instance
            if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$lazyInstance$) ;
            else if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$onReadyPromise$) {
                hostRef.$onReadyPromise$.then(() => fireConnectedCallback());
            }
        }
        endConnected();
    }
};
const disconnectInstance = (instance) => {
};
const disconnectedCallback = async (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$lazyInstance$) ;
        else if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$onReadyPromise$) {
            hostRef.$onReadyPromise$.then(() => disconnectInstance());
        }
    }
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    var _a;
    const endBootstrap = createTime();
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    const deferredConnectedCallbacks = [];
    let appLoadFallback;
    let isBootstrapping = true;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    lazyBundles.map((lazyBundle) => {
        lazyBundle[1].map((compactMeta) => {
            const cmpMeta = {
                $flags$: compactMeta[0],
                $tagName$: compactMeta[1],
                $members$: compactMeta[2],
                $listeners$: compactMeta[3],
            };
            {
                cmpMeta.$members$ = compactMeta[2];
            }
            const tagName = cmpMeta.$tagName$;
            const HostElement = class extends HTMLElement {
                // StencilLazyHost
                constructor(self) {
                    // @ts-ignore
                    super(self);
                    self = this;
                    registerHost(self, cmpMeta);
                }
                connectedCallback() {
                    if (appLoadFallback) {
                        clearTimeout(appLoadFallback);
                        appLoadFallback = null;
                    }
                    if (isBootstrapping) {
                        // connectedCallback will be processed once all components have been registered
                        deferredConnectedCallbacks.push(this);
                    }
                    else {
                        plt.jmp(() => connectedCallback(this));
                    }
                }
                disconnectedCallback() {
                    plt.jmp(() => disconnectedCallback(this));
                }
                componentOnReady() {
                    return getHostRef(this).$onReadyPromise$;
                }
            };
            cmpMeta.$lazyBundleId$ = lazyBundle[0];
            if (!exclude.includes(tagName) && !customElements.get(tagName)) {
                cmpTags.push(tagName);
                customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* PROXY_FLAGS.isElementConstructor */));
            }
        });
    });
    {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute('data-styles', '');
        // Apply CSP nonce to the style tag if it exists
        const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
        if (nonce != null) {
            visibilityStyle.setAttribute('nonce', nonce);
        }
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map((host) => host.connectedCallback());
    }
    else {
        {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
/**
 * Assigns the given value to the nonce property on the runtime platform object.
 * During runtime, this value is used to set the nonce attribute on all dynamically created script and style tags.
 * @param nonce The value to be assigned to the platform nonce property.
 * @returns void
 */
const setNonce = (nonce) => (plt.$nonce$ = nonce);
const hostRefs = /*@__PURE__*/ new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
const registerHost = (elm, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    {
        hostRef.$onReadyPromise$ = new Promise((r) => (hostRef.$onReadyResolve$ = r));
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    return hostRefs.set(elm, hostRef);
};
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    const module = cmpModules.get(bundleId) ;
    if (module) {
        return module[exportName];
    }
    /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${''}`)); }).then((importedModule) => {
        {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = /*@__PURE__*/ new Map();
const win = typeof window !== 'undefined' ? window : {};
const doc = win.document || { head: {} };
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructableStylesheets = /*@__PURE__*/ (() => {
        try {
            new CSSStyleSheet();
            return typeof new CSSStyleSheet().replaceSync === 'function';
        }
        catch (e) { }
        return false;
    })()
    ;
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* PLATFORM_FLAGS.queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const flush = () => {
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);

exports.bootstrapLazy = bootstrapLazy;
exports.getElement = getElement;
exports.promiseResolve = promiseResolve;
exports.registerInstance = registerInstance;
exports.setNonce = setNonce;

//# sourceMappingURL=index-9f2ec241.js.map