import { Clapperboard, Home, Layers2, TvMinimalPlay } from 'lucide-react'

export const navigation_items = [
	{
		label: 'Home',
		href: '/',
		icon: Home,
	},
	{ label: 'Lives', href: '/lives', icon: Layers2 },
	{ label: 'Subscriptions', href: '/subscriptions', icon: TvMinimalPlay },
	{ label: 'Dashboard', href: '/dashboard', icon: Clapperboard },
]
export const following_items = [
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
