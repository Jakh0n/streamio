import { getHomeFeed } from '@/actions/feed.action'
import UserAvatar from '@/components/shared/user-avatar'
import { formatDistanceToNow } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = async () => {
	const response = await getHomeFeed()

	const feeds = response?.data?.feed
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4'>
			{feeds?.map(feed => (
				<Link href={`/v/${feed.id}`} key={feed.id}>
					<div>
						<div className='h-56 relative rounded-lg overflow-hidden'>
							<Image
								src={feed.thumbnail}
								alt={feed.title}
								fill
								className='object-cover'
							/>
						</div>
						<div className='flex items-center space-x-2 mt-2'>
							<div className='w-10 h-10 rounded-full '>
								<UserAvatar
									label={feed.user.username}
									avatar={feed.user.avatar}
								/>
							</div>
							<div className='flex flex-col space-y-1'>
								<h2 className='text-sm line-clamp-2 break-words leading-4'>
									{feed.title}
								</h2>
								<div className='flex items-center gap-x-2 text-sm text-muted-foreground'>
									<p>@{feed.user.username}</p>
									<div className='size-1 rounded-full bg-muted-foreground' />
									<p>
										{formatDistanceToNow(feed.createdAt, { addSuffix: true })}
									</p>
								</div>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

export default HomePage
