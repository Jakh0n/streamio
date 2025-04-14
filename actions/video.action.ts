import { actionClient } from '@/lib/safe-action'

export const getComents = actionClient.action(async () => {
	await new Promise(resolve => setTimeout(resolve, 1000))
	return {
		comments: data,
	}
})

const data = [
	{
		id: '12',
		createdAt: new Date('2025-02-01T12:00:00Z'),
		content: 'The Olympics',
		user: {
			id: '1',
			username: 'samar',
			avatar: 'https://github.com/shadcn.png',
			followedBy: 8,
		},
	},
	{
		id: '2',
		createdAt: new Date('2025-01-02T12:00:00Z'),
		content:
			'The football Olympics 2025 in Paris is going to be the best one yet',
		user: {
			id: '1',
			username: 'oman',
			avatar: 'https://github.com/shadcn.png',
			followedBy: 8,
		},
	},
]
