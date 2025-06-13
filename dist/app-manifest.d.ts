import { z } from 'zod/v4';
import { ConfigShowModalFunction } from './config-modal.js';
import { WebAppConstructor } from './web-app.js';
import { WebGLAppConstructor } from './webgl-app.js';
import { LunaAppConstructor } from './luna-app.js';
export declare const AppManifestSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    version: z.ZodString;
    author: z.ZodString;
    license: z.ZodString;
    showModal: z.ZodOptional<z.ZodCustom<ConfigShowModalFunction, ConfigShowModalFunction>>;
    ConfigSchema: z.ZodOptional<z.ZodAny>;
    LunaApp: z.ZodOptional<z.ZodCustom<LunaAppConstructor, LunaAppConstructor>>;
    WebApp: z.ZodOptional<z.ZodCustom<WebAppConstructor, WebAppConstructor>>;
    WebGLApp: z.ZodOptional<z.ZodCustom<WebGLAppConstructor, WebGLAppConstructor>>;
}, z.core.$strip>;
export type AppManifestSchema = z.infer<typeof AppManifestSchema>;
