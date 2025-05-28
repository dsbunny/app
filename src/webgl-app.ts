// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as THREE from 'three';
import { AbstractApp } from './abstract-app.js';
import { AppParams } from './app-params.js';

export abstract class WebGLApp extends AbstractApp {
	protected _lastTime = 0;
	protected _currentTime = 0;
	protected _duration = 0;
	protected _ended = false;
	protected _error: any | null = null;
	protected _networkState = 0;
	protected _paused = true;
	protected _readyState = 0;

	camera = new THREE.Camera();
	scene = new THREE.Scene();

	protected constructor(
		public readonly fbo: THREE.WebGLRenderTarget,
		public readonly renderer: THREE.WebGLRenderer,
		params: AppParams,
	) {
		super(params);
		// Use duration set by scheduler, or default to 0.
		this._duration = params.duration || 0;
	}

	// Allocate resources for an instance, “fbo” is the
	// framebuffer object, i.e. GPU texture, and “renderer”
	// is the WebGLRenderer instance.
	static create(
		_fbo: THREE.WebGLRenderTarget,
		_renderer: THREE.WebGLRenderer,
		_params: AppParams,
	): WebGLApp {
		throw new Error(
			'WebGLApp.create() must be implemented by a subclass',
		);
	}

	close() {
		// Object3D references.
		this.scene.clear();
	}

	protected _render() {
		const width = this.width / this.renderer.getPixelRatio();
		const height = this.height / this.renderer.getPixelRatio();

		this.renderer.setViewport( 0, 0, width, height );

		this.renderer.setRenderTarget( this.fbo );
		this.renderer.render( this.scene, this.camera );
		this.renderer.setRenderTarget( null );
	}

	load(): void {
		// No resources to load.
		this._networkState = HTMLMediaElement.NETWORK_IDLE;
		this._readyState = HTMLMediaElement.HAVE_ENOUGH_DATA;
		this.dispatchEvent(new Event('canplay'));
	}

	pause(): void {
		// No resources to pause.
		this._paused = true;
	}

	play(): Promise<void> {
		// No resources to play.
		this._lastTime = performance.now();
		this._paused = false;
		return Promise.resolve();
	}

	// `HTMLMediaElement` instance properties.
	get currentSrc(): string {
		return this.params.src;
	}
	get currentTime(): number {
		return this._currentTime;
	}
	get duration(): number {
		return this._duration;
	}
	get ended(): boolean {
		return this._ended;
	}
	get error(): any | null {
		return this._error;
	}
	get networkState(): number {
		return this._networkState;
	}
	get paused(): boolean {
		return this._paused;
	}
	get readyState(): number {
		return this._readyState;
	}
	get src() {
		return this.currentSrc;
	}

	// Per `HTMLVideoElement`
	get height(): number {
		return this.fbo.height;
	}
	get width(): number {
		return this.fbo.width;
	}
}

export type WebGLAppConstructor = {
	create(
		fbo: THREE.WebGLRenderTarget,
		renderer: THREE.WebGLRenderer,
		params: AppParams,
	): WebGLApp;
}
