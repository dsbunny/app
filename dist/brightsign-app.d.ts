import { WebApp } from "./web-app.js";
import { AppParams } from './app-params.js';
export declare abstract class BrightSignApp extends WebApp {
}
export type BrightSignAppConstructor = {
    create(renderRoot: HTMLElement, params: AppParams): BrightSignApp;
};
