import { Separator } from '@/components/ui/separator'
import LatestComments from './_components/latest-comments'
import LatestStream from './_components/latest-stream'
import LatestVideo from './_components/latest-video'
import PublishedVideos from './_components/published-videos'
import RecentSubscribers from './_components/recent-subscribers'

const DashboarPage = () => {
	return (
		<>
			<div className='w-full lg:w-1/2'>
				<h2 className='text-2xl font-bold'>Channel Dashboard</h2>
				<p className='text-muted-foreground text-sm '>
					Welcome to your cahnnel dashboard. here you can manage your channel
					settings, analytics, and more.
				</p>
			</div>
			<Separator className='my-2' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-2'>
				<LatestVideo />
				<div className='space-y-6'>
					<LatestStream />
					<PublishedVideos />
				</div>
				<div className='space-y-6'>
					<RecentSubscribers />
					<LatestComments />
				</div>
			</div>
		</>
	)
}

export default DashboarPage
