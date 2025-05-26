// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod';

const AppManifestSchema = z.object({
	name: z.string(),
	description: z.string(),
	version: z.string(),
	author: z.string(),
	license: z.string(),
	showModal: z.function().optional(),
	ConfigSchema: z.any().optional(),
	WebApp: z.function().optional(),
	WebGLApp: z.function().optional(),
	LunaApp: z.function().optional(),
});

export type AppManifest = z.infer<typeof AppManifestSchema>;
