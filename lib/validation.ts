import { z } from 'zod'

export const labelSchema = z.object({
	label: z.string().min(3).max(10),
})

export const videoIdSchema = z.object({
	videoId: z.string().min(1),
})
