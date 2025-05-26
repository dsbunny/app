import { z } from 'zod';
import { ConfigShowModalFunction } from './config-modal.js';
import { WebAppConstructor } from './web-app.js';
import { WebGLAppConstructor } from './webgl-app.js';
export declare const AppManifestSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    version: z.ZodString;
    author: z.ZodString;
    license: z.ZodString;
    showModal: z.ZodOptional<z.ZodType<ConfigShowModalFunction, z.ZodTypeDef, ConfigShowModalFunction>>;
    ConfigSchema: z.ZodOptional<z.ZodAny>;
    WebApp: z.ZodOptional<z.ZodType<WebAppConstructor, z.ZodTypeDef, WebAppConstructor>>;
    WebGLApp: z.ZodOptional<z.ZodType<WebGLAppConstructor, z.ZodTypeDef, WebGLAppConstructor>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    version: string;
    author: string;
    license: string;
    showModal?: ConfigShowModalFunction | undefined;
    ConfigSchema?: any;
    WebApp?: WebAppConstructor | undefined;
    WebGLApp?: WebGLAppConstructor | undefined;
}, {
    name: string;
    description: string;
    version: string;
    author: string;
    license: string;
    showModal?: ConfigShowModalFunction | undefined;
    ConfigSchema?: any;
    WebApp?: WebAppConstructor | undefined;
    WebGLApp?: WebGLAppConstructor | undefined;
}>;
export type AppManifestSchema = z.infer<typeof AppManifestSchema>;
