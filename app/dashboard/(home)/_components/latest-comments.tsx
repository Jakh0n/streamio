import UserAvatar from '@/components/shared/user-avatar'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const LatestComments = () => {
	return (
		<>
			<div className='p-4 border rounded-md'>
				<h2 className='text-lg font-bold '>Latest Comments</h2>
				<p className='text-sm text-muted-foreground'>
					Here are the latest comments from your subscribers.
				</p>
				<Separator className='my-2' />
				<div className='flex items-center gap-2'>
					<div className='flex items-center gap-2'>
						<UserAvatar avatar='https://github.com/shadcn.png' label='Jakhon' />
						<div className='flex flex-col'>
							<div className='flex items-center space-x-1'>
								<p className='text-sm text-muted-foreground'>@jakhon</p>
								<div className='size-1 rounded-full bg-muted-foreground' />
								<p className='text-sm text-muted-foreground'>3 days ago</p>
							</div>
							<p className='text-sm text-muted-foreground font-spaceGrotesk leading-5 line-clamp-2'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Assumenda suscipit minus dolorum deserunt repudiandae possimus
								necessitatibus ad reiciendis omnis perferendis. Quaerat natus
								dolores quo modi. Architecto eveniet veniam quae omnis, nobis
								enim magni voluptatibus?
							</p>
						</div>
					</div>
					<Image
						src='https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
						alt='Latest video'
						width={100}
						height={100}
						className='rounded-lg object-cover'
					/>
				</div>
			</div>
		</>
	)
}

export default LatestComments
