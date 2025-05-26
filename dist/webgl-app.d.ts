import * as THREE from 'three';
import { AbstractApp } from './abstract-app.js';
import { AppParams } from './app-params.js';
export declare abstract class WebGLApp extends AbstractApp {
    readonly fbo: THREE.WebGLRenderTarget;
    readonly renderer: THREE.WebGLRenderer;
    protected _lastTime: number;
    protected _currentTime: number;
    protected _duration: number;
    protected _ended: boolean;
    protected _error: any | null;
    protected _networkState: number;
    protected _paused: boolean;
    protected _readyState: number;
    camera: THREE.Camera;
    scene: THREE.Scene;
    protected constructor(fbo: THREE.WebGLRenderTarget, renderer: THREE.WebGLRenderer, params: AppParams);
    static create(_fbo: THREE.WebGLRenderTarget, _renderer: THREE.WebGLRenderer, _params: AppParams): WebGLApp;
    close(): void;
    protected _render(): void;
    load(): void;
    pause(): void;
    play(): Promise<void>;
    get currentSrc(): string;
    get currentTime(): number;
    get duration(): number;
    get ended(): boolean;
    get error(): any | null;
    get networkState(): number;
    get paused(): boolean;
    get readyState(): number;
    get src(): string;
    get height(): number;
    get width(): number;
}
export type WebGLAppConstructor = {
    create(fbo: THREE.WebGLRenderTarget, renderer: THREE.WebGLRenderer, params: AppParams): WebGLApp;
};
