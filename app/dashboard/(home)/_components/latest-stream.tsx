import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const LatestStream = () => {
	return (
		<>
			<div className='p-4 border rounded-md space-y-4'>
				<h1 className='text-2xl font-bold font-spaceGrotesk'>
					Latest Video Performance
				</h1>
				<div className='rounded-lg h-44 relative overflow-hidden mt-2  '>
					<div className='bg-gradient-to-t absolute inset-0 from-primary rounded-lg z-40'></div>
					<Image
						src={
							'https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
						}
						alt='Latest video'
						fill
						className='object-cover rounded-lg '
					/>
					<div className='absolute bottom-0 left-0 line-clamp-2 leading-5  right-0 p-2 font-spaceGrotesk z-50 text-primary-foreground text-lg font-bold'>
						The football match Olypic 2025 in paris is going to start
					</div>
				</div>
				<Button variant='outline' className='w-fit rounded-full'>
					<span className='flex items-center gap-2'>View Stream</span>
					<ArrowRight className='size-4 animate-pulse' />
				</Button>
			</div>
		</>
	)
}

export default LatestStream
