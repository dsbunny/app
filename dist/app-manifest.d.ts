import { z } from 'zod';
export declare const AppManifestSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    version: z.ZodString;
    author: z.ZodString;
    license: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    version: string;
    author: string;
    license: string;
}, {
    name: string;
    description: string;
    version: string;
    author: string;
    license: string;
}>;
export type AppManifest = z.infer<typeof AppManifestSchema>;
