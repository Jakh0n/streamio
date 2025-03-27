'use server'

import { actionClient } from '@/lib/safe-action'
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

const data = [
	{
		label: 'John Doe',
		avatar: 'https://github.com/shadcn.png',
		followedBy: 8,
	},
	{
		label: 'Osman ALi',
		avatar: 'https://github.com/shadcn.png',
		followedBy: 10,
	},
]
