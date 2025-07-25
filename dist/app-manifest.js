// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
export const AppManifestSchema = z.object({
    name: z.string(),
    description: z.string(),
    version: z.string(),
    author: z.string(),
    license: z.string(),
    showModal: z.custom().optional(),
    ConfigSchema: z.any().optional(),
    LunaApp: z.custom().optional(),
    WebApp: z.custom().optional(),
    WebGLApp: z.custom().optional(),
});
//# sourceMappingURL=app-manifest.js.map