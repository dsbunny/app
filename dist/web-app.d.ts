import { AbstractApp } from './abstract-app.js';
import { AppParams } from './app-params.js';
export declare abstract class WebApp extends AbstractApp {
    readonly renderRoot: HTMLElement;
    protected _lastTime: number;
    protected _currentTime: number;
    protected _duration: number;
    protected _ended: boolean;
    protected _error: any | null;
    protected _networkState: number;
    protected _paused: boolean;
    protected _readyState: number;
    protected constructor(renderRoot: HTMLElement, params: any);
    static create(_renderRoot: HTMLElement, _params: AppParams): WebApp;
    close(): void;
    animate(now: DOMHighResTimeStamp, _remaining: number): void;
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
export type WebAppConstructor = {
    create(renderRoot: HTMLElement, params: AppParams): WebApp;
};
