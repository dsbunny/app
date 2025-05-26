import { z } from 'zod';
export declare const AppManifestSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    version: z.ZodString;
    author: z.ZodString;
    license: z.ZodString;
    showModal: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    ConfigSchema: z.ZodOptional<z.ZodAny>;
    WebApp: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    WebGLApp: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    LunaApp: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    version: string;
    author: string;
    license: string;
    showModal?: ((...args: unknown[]) => unknown) | undefined;
    ConfigSchema?: any;
    WebApp?: ((...args: unknown[]) => unknown) | undefined;
    WebGLApp?: ((...args: unknown[]) => unknown) | undefined;
    LunaApp?: ((...args: unknown[]) => unknown) | undefined;
}, {
    name: string;
    description: string;
    version: string;
    author: string;
    license: string;
    showModal?: ((...args: unknown[]) => unknown) | undefined;
    ConfigSchema?: any;
    WebApp?: ((...args: unknown[]) => unknown) | undefined;
    WebGLApp?: ((...args: unknown[]) => unknown) | undefined;
    LunaApp?: ((...args: unknown[]) => unknown) | undefined;
}>;
export type AppManifest = z.infer<typeof AppManifestSchema>;
