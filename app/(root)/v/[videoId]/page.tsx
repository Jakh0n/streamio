import { getVideoById } from '@/actions/feed.action'
import Comments from '../_components/comments'
import Description from '../_components/description'
import RecomendedVideo from '../_components/recomended-video'
import UserAction from '../_components/user-action'
import UserInformation from '../_components/user-information'

interface VideoIdParams {
	params: Promise<{ videoId: string }>
}

const VideoPage = async ({ params }: VideoIdParams) => {
	const { videoId } = await params
	const response = await getVideoById({ videoId })
	const video = response?.data?.data?.feed
	return (
		<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4'>
			<div className='col-span-1 lg:col-span-3'>
				<div className='aspect-video w-full rounded-lg bg-gray-800' />
				<h1 className='text-lg md:text-xl lg:text-2xl font-bold mt-2 line-clamp-2'>
					{video?.title}
				</h1>
				<div className='block lg:flex items-center justify-between'>
					<UserInformation />
					<UserAction reactions={'DISLIKE'} />
				</div>
				<Description />
				<Comments />
			</div>
			<div className='col-span-1'>
				<RecomendedVideo />
			</div>
		</div>
	)
}

export default VideoPage
