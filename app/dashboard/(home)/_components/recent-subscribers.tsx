import UserAvatar from '@/components/shared/user-avatar'

const RecentSubscribers = () => {
	return (
		<>
			<div className='p-4 border rounded-md space-y-4'>
				<h2 className='text-lg font-bold font-spaceGrotesk'>
					Recent Subscribers
				</h2>
				<div className='flex items-center gap-2'>
					<UserAvatar avatar='https://github.com/shadcn.png' label='Jakhon' />
					<div className='flex flex-col'>
						<p className='text-md font-semibold font-spaceGrotesk'>
							Jakhon Yokubov
						</p>
						<p className='text-sm text-muted-foreground'>23 followers</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default RecentSubscribers
