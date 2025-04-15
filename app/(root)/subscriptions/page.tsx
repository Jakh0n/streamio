import { getHomeFeed } from '@/actions/feed.action'
import { getFollowing } from '@/actions/user.action'
import UserAvatar from '@/components/shared/user-avatar'
import { Separator } from '@/components/ui/separator'
import { formatDistanceToNow } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

const SubscriptionPage = async () => {
	const responseUser = await getFollowing()
	const responseFeeds = await getHomeFeed()

	const feeds = responseFeeds?.data?.feed
	const subscriptions = responseUser?.data?.following
	return (
		<>
			<h1 className='text-2xl font-bold'>Users</h1>
			<div className='w-full overflow-x-scroll custom-scrollbar flex items-center space-x-4 mt-4'>
				{subscriptions?.map(subscription => (
					<Link href={`/u/${subscription.label}`} key={subscription.id}>
						<UserAvatar
							avatar={subscription.avatar}
							label={subscription.label}
							size='lg'
						/>
						<p className='text-sm font-medium text-center capitalize break-words line-clamp-1 mt-1 w-full'>
							{subscription.label}
						</p>
					</Link>
				))}
			</div>
			<Separator className='my-4' />
			<h1 className='text-2xl font-bold'>Videos</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mt-4'>
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
										avatar={feed.user.avatar}
										label={feed.user.username}
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
		</>
	)
}

export default SubscriptionPage
