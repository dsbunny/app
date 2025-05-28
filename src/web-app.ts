// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { AbstractApp } from './abstract-app.js';
import { AppParams } from './app-params.js';

export abstract class WebApp extends AbstractApp {
	protected _lastTime = 0;
	protected _currentTime = 0;
	protected _duration = 0;
	protected _ended = false;
	protected _error: any | null = null;
	protected _networkState = 0;
	protected _paused = true;
	protected _readyState = 0;

	protected constructor(
		public readonly renderRoot: HTMLElement,
		params: any,
	) {
		super(params);
		// Use duration set by scheduler, or default to 0.
		this._duration = params.duration || 0;
	}

	// Allocate resources for an instance, “renderRoot” is
	// the container element, and “renderer”
	// is the CSSRenderer instance.
	static create(
		_renderRoot: HTMLElement,
		_params: AppParams,
	): WebApp {
		throw new Error(
			'WebApp.create() must be implemented by a subclass',
		);
	}

	close() {
		this.renderRoot.innerHTML = '';
	}

	animate(
		now: DOMHighResTimeStamp,
		_remaining: number,
	): void {
		// No JavaScript animation.
		if(this.paused || this.ended) {
			return;
		}
		const elapsed = (now - this._lastTime) / 1000;
		this._currentTime += elapsed;
		if(this._currentTime < this._duration) {
			this._lastTime = now;
		} else {
			this._currentTime = this._duration;
			if(!this._ended) {
				this._ended = true;
				this.dispatchEvent(new Event('ended'));
			}
		}
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
		return this.renderRoot.parentElement!.clientHeight;
	}
	get width(): number {
		return this.renderRoot.parentElement!.clientWidth;
	}
}

export type WebAppConstructor = {
	create(
		renderRoot: HTMLElement,
		params: AppParams,
	): WebApp;
};
