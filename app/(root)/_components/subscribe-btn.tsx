import { Button } from '@/components/ui/button'

interface SubscribeBtnProps {
	isFollowing: boolean
}

const SubscribeBtn = ({ isFollowing }: SubscribeBtnProps) => {
	return (
		<Button
			variant={isFollowing ? 'secondary' : 'default'}
			size={'sm'}
			className='rounded-full mt-4 text-sm lg:text-base'
		>
			{isFollowing ? 'Unsubscribe' : 'Subscribe'}
		</Button>
	)
}

export default SubscribeBtn
