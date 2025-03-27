import { getFollowing } from '@/actions/user.action'
import UserAvatar from '@/components/shared/user-avatar'
import {
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'

const Following = async () => {
	const data = await getFollowing()
	const following = data?.data?.following || []

	return (
		<SidebarGroup>
			<SidebarGroupLabel>Followed by</SidebarGroupLabel>
			<SidebarMenu>
				{following.length > 0 ? (
					following.map(item => (
						<SidebarMenuItem key={item.label}>
							<SidebarMenuButton asChild size={'lg'}>
								<Link href={`/u/${item.label}`}>
									<UserAvatar
										avatar={item.avatar}
										username={item.label}
										variant={'square'}
									/>

									<div className='flex flex-col'>
										<p className='text-sm font-space_grotesk'>@{item.label}</p>
										<p className='text-xs text-muted-foreground'>
											{item.followedBy} follower{item.followedBy !== 1 && 's'}
										</p>
									</div>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))
				) : (
					<div className='flex items-center justify-center h-full'>
						<p className='text-sm text-muted-foreground'>No following</p>
					</div>
				)}
			</SidebarMenu>
		</SidebarGroup>
	)
}

export default Following
export const FollowingSkeleton = () => {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Followed by</SidebarGroupLabel>
			<SidebarContent>
				<SidebarMenu>
					{Array.from({ length: 3 }).map((_, index) => (
						<SidebarMenuItem key={index}>
							<SidebarMenuButton asChild size={'lg'}>
								<div className='flex items-center space-x-4 '>
									<Skeleton className='h-8 w-8 rounded-full' />
									<div className='space-y-2'>
										<Skeleton className='h-4 w-16' />
										<Skeleton className='h-4 w-28' />
									</div>
								</div>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
		</SidebarGroup>
	)
}
