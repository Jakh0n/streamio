import { Button } from '@/components/ui/button'
import { ArrowRight, Eye, Heart, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const PublishedVideos = () => {
	return (
		<>
			<div className='p-4 border rounded-md space-y-4'>
				<div className='flex items-center gap-2'>
					<Image
						src='https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
						alt='logo'
						width={96}
						height={54}
						className='rounded-md object-cover'
					/>
					<div className='flex flex-1 flex-col'>
						<h2 className='text-sm font-semibold font-spaceGrotesk line-clamp-2 leading-5'>
							The football match Olypic 2025 in paris is going to start
						</h2>
						<div className='flex items-center gap-2 mt-1'>
							<p className='text-sm text-muted-foreground flex items-center gap-1'>
								<Eye className='size-3' />
								<span>24</span>
							</p>
							<p className='text-sm text-muted-foreground flex items-center gap-1'>
								<MessageCircle className='size-3' />
								<span>45</span>
							</p>
							<p className='text-sm text-muted-foreground flex items-center gap-1'>
								<Heart className='size-3' />
								<span>12.3k</span>
							</p>
						</div>
					</div>
				</div>
				<Button variant='outline' className='w-fit rounded-full'>
					<span>Go to Video </span>
					<ArrowRight className='size-4 animate-pulse' />
				</Button>
			</div>
		</>
	)
}

export default PublishedVideos
