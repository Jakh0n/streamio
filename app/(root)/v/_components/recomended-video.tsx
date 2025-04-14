import { getHomeFeed } from '@/actions/feed.action'
import { Eye, Heart, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const RecomendedVideo = async () => {
	const response = await getHomeFeed()
	const videos = response?.data?.feed || []
	return (
		<div className='flex flex-col items-start gap-2 mt-2'>
			{videos.map(video => (
				<Link
					href={`/v/${video.id}`}
					key={video.id}
					className='flex items-center gap-2'
				>
					<Image
						src={video.thumbnail}
						alt={video.title}
						width={98}
						height={54}
						className=' object-cover rounded-md'
					/>
					<div className='flex flex-col'>
						<p className='text-sm font-semibold line-clamp-2 leading-1 font-spaceGrotesk'>
							{video.title}
						</p>
						<div className='flex items-center gap-2'>
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
				</Link>
			))}
		</div>
	)
}

export default RecomendedVideo
