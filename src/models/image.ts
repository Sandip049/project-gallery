import { z } from 'zod';

const BasicSchema = z.object({
    page: z.number(),
    per_page: z.number(),
    total_results: z.number(),
    prev_page: z.string().optional(),
    next_page: z.string().optional(),
});

const PhotoSchema = z.object({
    id: z.number(),
    width: z.number(),
    height: z.number(),
    url: z.string(),
    src: z.object({
        original: z.string().optional(),
        large2x: z.string().optional(),
        large: z.string(),
        medium: z.string().optional(),
        small: z.string().optional(),
        portrait: z.string().optional(),
        landscape: z.string().optional(),
        tiny: z.string().optional(),
    }),
    alt: z.string(),
    blurredDataUrl: z.string().optional(),
});

export const CombinedPhotoSchema = BasicSchema.extend({ photos: z.array(PhotoSchema) });

export type Photo = z.infer<typeof PhotoSchema>;
export type CombinedPhoto = z.infer<typeof CombinedPhotoSchema>;