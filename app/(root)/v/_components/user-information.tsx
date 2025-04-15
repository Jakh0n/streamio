'use server'

import { getUserByUsername } from '@/actions/user.action'
import UserAvatar from '@/components/shared/user-avatar'
import { Button } from '@/components/ui/button'
import { BadgeCheck } from 'lucide-react'
import Link from 'next/link'
import SubscribeBtn from '../../_components/subscribe-btn'

const UserInformation = async () => {
	const response = await getUserByUsername({ label: 'Jakhon' })
	const user = response?.data?.data?.user

	return (
		<Link
			href={`/u/${user?.label}`}
			className='flex items-center space-x-2 mt-4'
		>
			<UserAvatar
				label={user?.label!}
				avatar={user?.avatar!}
				size='md'
				className='md:size-10 lg:size-14'
			/>
			<div className='flex items-start flex-col '>
				<div className='flex items-center space-x-2'>
					<p
						className={
							'text-sm md:text-md lg:text-lg font-semibold line-clamp-1 lg:font-bold leading-none '
						}
					>
						{user?.fullName}
					</p>
					<Button
						variant='ghost'
						size='icon'
						className='flex items-center justify-center'
					>
						<BadgeCheck className=' text-blue-500' />
					</Button>
				</div>
				<p className='text-sm text-muted-foreground leading-none'>
					{user?.followedBy} Subscribers
				</p>
			</div>
			<SubscribeBtn isFollowing />
		</Link>
	)
}

export default UserInformation
