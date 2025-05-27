// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { WebApp } from "./web-app.js";
import { AppParams } from './app-params.js';

export abstract class LunaApp extends WebApp {}

export type LunaAppConstructor = {
	create(
		renderRoot: HTMLElement,
		params: AppParams,
	): LunaApp;
};
