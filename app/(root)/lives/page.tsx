import { getFollowing } from '@/actions/user.action'
import UserAvatar from '@/components/shared/user-avatar'
import Link from 'next/link'

const LivesPage = async () => {
	const response = await getFollowing()
	const lives = response?.data?.following

	return (
		<div className='grid grid-cols-1 gap-2 lg:gap-4 md:grid-cols-2 lg:grid-cols-3'>
			{lives?.map(live => (
				<Link href={`/u/${live.label}`} key={live.label}>
					<div className='w-full h-56 bg-secondary rounded-lg flex items-center flex-col justify-center '>
						<UserAvatar
							username={live.label}
							avatar={live.avatar}
							size='lg'
							showBadge
							isLive={true}
						/>
						<div className='flex items-center flex-col gap-2 mt-3'>
							<h1 className='text-sm font-medium'>
								<span className='text-primary'>{live.label}</span> is Live
							</h1>
							<p className='text-sm text-muted-foreground leading-4 text-center line-clamp-2'>
								Topic of live is talking about something specific for example:
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

export default LivesPage
