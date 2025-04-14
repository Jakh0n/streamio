'use client'
import UserAvatar from '@/components/shared/user-avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useUser } from '@clerk/nextjs'
import { SendIcon } from 'lucide-react'

const CommentInput = () => {
	const user = useUser()

	return (
		<div className='flex items-center gap-2 mt-2'>
			<UserAvatar
				label={user.user?.fullName || ''}
				avatar={user.user?.imageUrl || ''}
			/>
			<div className='flex-1 flex items-center '>
				<Input
					placeholder='Add a comment...'
					className='rounded-md rounded-r-none focus-visible:ring-0 '
				/>
				<Button size='icon' className='rounded-l-none'>
					<SendIcon className='w-4 h-4' />
				</Button>
			</div>
		</div>
	)
}

export default CommentInput
