import { getComents } from '@/actions/video.action'
import UserAvatar from '@/components/shared/user-avatar'
import { Separator } from '@/components/ui/separator'
import CommentInput from './comment-input'
const Comments = async () => {
	const response = await getComents()
	const comments = response?.data?.comments || []

	return (
		<div className='mb-8'>
			<h2 className='text-md font-semibold mt-4'>Comments</h2>
			<CommentInput />
			<Separator className='my-4' />
			<div className='flex flex-col space-y-3 mt-2'>
				{comments.map(comment => (
					<div key={comment.id} className='flex items-start gap-2'>
						<UserAvatar
							label={comment.user.username}
							avatar={comment.user.avatar}
						/>
						<div className='flex flex-col gap-2'>
							<div className='flex items-center gap-2'>
								<p className='text-sm font-semibold text-muted-foreground leading-none'>
									@{comment.user.username}
								</p>
								<p className='text-sm text-muted-foreground leading-none'>
									{comment.createdAt.toLocaleDateString()}
								</p>
							</div>

							<p className='text-sm leading-none'>{comment.content}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Comments
