import { getUserByUsername } from '@/actions/user.action'
import UserAvatar from '@/components/shared/user-avatar'

interface UsernamePageProps {
	params: Promise<{ label: string }>
}

const UserNamePage = async ({ params }: UsernamePageProps) => {
	const { label } = await params
	const response = await getUserByUsername({ label })
	console.log('Response:', response)
	const user = response?.data?.data?.user
	console.log('User:', user)

	return (
		<>
			<div className='w-full h-40 md:h-60 lg:h-72 bg-secondary rounded-lg flex items-center justify-center'>
				<h1 className='text-muted-foreground text-xl lg:text-2xl'>
					Banner Image
				</h1>
			</div>
			<div className='w-full md:w-1/2'>
				<div className='flex items-center gap-2'>
					{user && (
						<UserAvatar avatar={user.avatar} label={user.label} size={'lg'} />
					)}
					<div className='flex items-center space-x-2 flex-col'>
						<h1 className='text-xl lg:text-2xl font-medium lg:font-bold'>
							{user?.label}
						</h1>
						<p className='text-sm text-muted-foreground'>{user?.label}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default UserNamePage
