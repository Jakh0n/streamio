import { ArrowRight } from 'lucide-react'

import { Heart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Clock, Eye, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const LatestVideo = () => {
	return (
		<div className='p-4 border rounded-md space-y-4'>
			<h1 className='text-lg font-bold'>Latest Video Performance</h1>
			<div className='rounded-lg h-44 relative overflow-hidden mt-2  '>
				<div className='bg-gradient-to-t absolute inset-0 from-primary rounded-lg z-40'></div>
				<Image
					src={
						'https://img.olympics.com/images/image/private/t_16-9_640/f_auto/v1538355600/primary/owtwv8todbwx68perkjz'
					}
					alt='Latest video'
					fill
					className='object-cover rounded-lg '
				/>
				<div className='absolute bottom-0 left-0 line-clamp-2  right-0 p-2 font-spaceGrotesk z-50 text-primary-foreground text-lg font-bold'>
					The Olympics
				</div>
			</div>
			<p className='text-muted-foreground text-sm '>
				2 days compared to your typical performance
			</p>
			<Separator className='my-4' />
			<div className='rounded-md p-4 border space-y-2'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-1'>
						<Clock className='size-3' />
						<span className='text-sm'>Created At</span>
					</div>
					<p className='text-muted-foreground text-sm border-b '>2 days ago</p>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-1'>
						<Eye className='size-3' />
						<span className='text-sm'>Views</span>
					</div>
					<p className='text-muted-foreground text-sm border-b '>234</p>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-1'>
						<MessageCircle className='size-3' />
						<span className='text-sm'>Comments</span>
					</div>
					<p className='text-muted-foreground text-sm border-b '>223</p>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-1'>
						<Heart className='size-3' />
						<span className='text-sm'>Likes</span>
					</div>
					<p className='text-muted-foreground text-sm border-b '>456</p>
				</div>
			</div>
			<div className='flex items-center gap-4'>
				<Button className='w-fit ' variant='outline'>
					<span>Go to video</span>
					<ArrowRight className='size-4 animate-pulse' />
				</Button>
				<Button className='w-fit ' variant='outline'>
					See Comments (56)
				</Button>
			</div>
		</div>
	)
}

export default LatestVideo
