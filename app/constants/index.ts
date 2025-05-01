import {
	Airplay,
	Clapperboard,
	Home,
	Layers2,
	LayoutDashboard,
	Settings,
	TvMinimalPlay,
	Users,
	Video,
} from 'lucide-react'

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
export const dashboard_navigation_items = [
	{ title: 'Home', route: '/', icon: Home },
	{ title: 'Dashboard', route: '/dashboard', icon: LayoutDashboard },
	{ title: 'Videos', route: '/dashboard/videos', icon: Video },
	{ title: 'Stream', route: '/dashboard/stream', icon: Airplay },
	{ title: 'Settings', route: '/dashboard/settings', icon: Settings },
	{ title: 'Community', route: '/dashboard/community', icon: Users },
]
