import * as THREE from 'three';

// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
class AbstractApp extends EventTarget {
    params;
    constructor(params) {
        super();
        this.params = params;
        // Validate the parameters.
        if (!this.params.src || typeof this.params.src !== 'string') {
            throw new TypeError('Invalid src parameter');
        }
        if (typeof this.params.duration !== 'number' || this.params.duration < 0) {
            throw new TypeError('Invalid duration parameter');
        }
    }
}

// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
class WebApp extends AbstractApp {
    renderRoot;
    _lastTime = 0;
    _currentTime = 0;
    _duration = 0;
    _ended = false;
    _error = null;
    _networkState = 0;
    _paused = true;
    _readyState = 0;
    constructor(renderRoot, params) {
        super(params);
        this.renderRoot = renderRoot;
        // Use duration set by scheduler, or default to 0.
        this._duration = params.duration || 0;
    }
    // Allocate resources for an instance, “renderRoot” is
    // the container element, and “renderer”
    // is the CSSRenderer instance.
    static create(_renderRoot, _params) {
        throw new Error('WebApp.create() must be implemented by a subclass');
    }
    close() {
        this.renderRoot.innerHTML = '';
    }
    animate(now, _remaining) {
        // No JavaScript animation.
        if (this.paused || this.ended) {
            return;
        }
        const elapsed = (now - this._lastTime) / 1000;
        this._currentTime += elapsed;
        if (this._currentTime < this._duration) {
            this._lastTime = now;
        }
        else {
            this._currentTime = this._duration;
            if (!this._ended) {
                this._ended = true;
                this.dispatchEvent(new Event('ended'));
            }
        }
    }
    load() {
        // No resources to load.
        this.dispatchEvent(new Event('canplay'));
    }
    pause() {
        // No resources to pause.
        this._paused = true;
    }
    play() {
        // No resources to play.
        this._lastTime = performance.now();
        this._paused = false;
        return Promise.resolve();
    }
    // `HTMLMediaElement` instance properties.
    get currentSrc() {
        return this.params.src;
    }
    get currentTime() {
        return this._currentTime;
    }
    get duration() {
        return this._duration;
    }
    get ended() {
        return this._ended;
    }
    get error() {
        return this._error;
    }
    get networkState() {
        return this._networkState;
    }
    get paused() {
        return this._paused;
    }
    get readyState() {
        return this._readyState;
    }
    get src() {
        return this.currentSrc;
    }
    // Per `HTMLVideoElement`
    get height() {
        return this.renderRoot.clientHeight;
    }
    get width() {
        return this.renderRoot.clientWidth;
    }
}

// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
class WebGLApp extends AbstractApp {
    fbo;
    renderer;
    _lastTime = 0;
    _currentTime = 0;
    _duration = 0;
    _ended = false;
    _error = null;
    _networkState = 0;
    _paused = true;
    _readyState = 0;
    camera = new THREE.Camera();
    scene = new THREE.Scene();
    constructor(fbo, renderer, params) {
        super(params);
        this.fbo = fbo;
        this.renderer = renderer;
        // Use duration set by scheduler, or default to 0.
        this._duration = params.duration || 0;
    }
    // Allocate resources for an instance, “fbo” is the
    // framebuffer object, i.e. GPU texture, and “renderer”
    // is the WebGLRenderer instance.
    static create(_fbo, _renderer, _params) {
        throw new Error('WebGLApp.create() must be implemented by a subclass');
    }
    close() {
        // Object3D references.
        this.scene.clear();
    }
    _render() {
        const width = this.width / this.renderer.getPixelRatio();
        const height = this.height / this.renderer.getPixelRatio();
        this.renderer.setViewport(0, 0, width, height);
        this.renderer.setRenderTarget(this.fbo);
        this.renderer.render(this.scene, this.camera);
        this.renderer.setRenderTarget(null);
    }
    load() {
        // No resources to load.
        this.dispatchEvent(new Event('canplay'));
    }
    pause() {
        // No resources to pause.
        this._paused = true;
    }
    play() {
        // No resources to play.
        this._lastTime = performance.now();
        this._paused = false;
        return Promise.resolve();
    }
    // `HTMLMediaElement` instance properties.
    get currentSrc() {
        return this.params.src;
    }
    get currentTime() {
        return this._currentTime;
    }
    get duration() {
        return this._duration;
    }
    get ended() {
        return this._ended;
    }
    get error() {
        return this._error;
    }
    get networkState() {
        return this._networkState;
    }
    get paused() {
        return this._paused;
    }
    get readyState() {
        return this._readyState;
    }
    get src() {
        return this.currentSrc;
    }
    // Per `HTMLVideoElement`
    get height() {
        return this.fbo.height;
    }
    get width() {
        return this.fbo.width;
    }
}

export { AbstractApp, WebApp, WebGLApp };
//# sourceMappingURL=bundle.mjs.map
