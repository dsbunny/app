export type AppParams = {
    src: string;
    duration: number;
} & Record<string, any>;
export declare abstract class AbstractApp extends EventTarget {
    readonly params: AppParams;
    protected constructor(params: AppParams);
    abstract close(): void;
    abstract animate(now: DOMHighResTimeStamp, remaining: number): void;
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
    abstract height: number;
    abstract width: number;
}
