// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { AppParams } from './app-params.js';

export abstract class AbstractApp extends EventTarget {
	protected constructor(
		public readonly params: AppParams,
	) {
		super();
		// Validate the parameters.
		if(!this.params.src || typeof this.params.src !== 'string') {
			throw new TypeError('Invalid src parameter');
		}
		if(typeof this.params.duration !== 'number' || this.params.duration < 0) {
			throw new TypeError('Invalid duration parameter');
		}
	}

	// Release all resources acquired in the init() call.
	abstract close(): void;

	// Called every frame to update the rendering state.
	abstract animate(
		now: DOMHighResTimeStamp,
		remaining: number,
	): void;

	// `HTMLMediaElement` instance properties.
	abstract currentSrc: string;
	abstract currentTime: number;
	abstract duration: number;
	abstract ended: boolean;
	abstract error: any | null;
	abstract networkState: number;
	abstract paused: boolean;
	abstract readyState: number;
	abstract src: string;

	abstract load(): void;
	abstract pause(): void;
	abstract play(): Promise<void>;

	// Per `HTMLVideoElement`
	abstract height: number;
	abstract width: number;
}
