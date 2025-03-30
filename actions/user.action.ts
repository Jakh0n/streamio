'use server'

import { actionClient } from '@/lib/safe-action'
import { labelSchema } from '@/lib/validation'
import { FollowingResponse, RecommendedResponse } from '@/types'

export const getFollowing = actionClient.action(
	async (): Promise<FollowingResponse> => {
		await new Promise(resolve => setTimeout(resolve, 1000))
		return {
			following: data,
		}
	}
)

export const getRecommended = actionClient.action(
	async (): Promise<RecommendedResponse> => {
		await new Promise(resolve => setTimeout(resolve, 1000))
		return {
			recommended: data,
		}
	}
)
export const getUserByUsername = actionClient
	.schema(labelSchema)
	.action(async ({ parsedInput }) => {
		const { label } = parsedInput
		const user = data.find(user => user.label === label)
		return {
			data: {
				user,
			},
		}
	})

const data = [
	{
		id: '1',
		label: 'Jakhon',
		avatar: 'https://github.com/shadcn.png',
		followedBy: 8,
		fullName: 'Jakhon Yokubov',
	},
	{
		id: '2',
		label: 'Oman',
		avatar: 'https://github.com/shadcn.png',
		followedBy: 23,
		fullName: 'Oman',
	},
]
