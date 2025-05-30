// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod';
import { ConfigShowModalFunction } from './config-modal.js';
import { WebAppConstructor } from './web-app.js';
import { WebGLAppConstructor } from './webgl-app.js';
import { LunaAppConstructor } from './luna-app.js';

export const AppManifestSchema = z.object({
	name: z.string(),
	description: z.string(),
	version: z.string(),
	author: z.string(),
	license: z.string(),
	showModal: z.custom<ConfigShowModalFunction>().optional(),
	ConfigSchema: z.any().optional(),
	LunaApp: z.custom<LunaAppConstructor>().optional(),
	WebApp: z.custom<WebAppConstructor>().optional(),
	WebGLApp: z.custom<WebGLAppConstructor>().optional(),
});

export type AppManifestSchema = z.infer<typeof AppManifestSchema>;
