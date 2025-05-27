import { WebApp } from "./web-app.js";
import { AppParams } from './app-params.js';
export declare abstract class LunaApp extends WebApp {
}
export type LunaAppConstructor = {
    create(renderRoot: HTMLElement, params: AppParams): LunaApp;
};
