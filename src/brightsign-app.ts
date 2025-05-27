// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { WebApp } from "./web-app.js";
import { AppParams } from './app-params.js';

export abstract class BrightSignApp extends WebApp {}

export type BrightSignAppConstructor = {
	create(
		renderRoot: HTMLElement,
		params: AppParams,
	): BrightSignApp;
};
