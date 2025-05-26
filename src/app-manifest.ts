// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod';

export const AppManifestSchema = z.object({
  	name: z.string(),
	description: z.string(),
	version: z.string(),
	author: z.string(),
	license: z.string(),
});
export type AppManifest = z.infer<typeof AppManifestSchema>;
