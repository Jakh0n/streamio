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
