import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
} from '@/components/ui/sidebar'
import { SignOutButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { ChevronUp, Clapperboard, LogOut, User2 } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import Following, { FollowingSkeleton } from './following'
import Navigation from './navigation'
import Recommended, { RecommendedSkeleton } from './recommended'

export async function AppSidebar() {
	const user = await currentUser()
	return (
		<Sidebar collapsible='icon'>
			<SidebarHeader />
			<SidebarContent>
				<Navigation />
				<SidebarSeparator />
				<Suspense fallback={<FollowingSkeleton />}>
					<Following />
				</Suspense>
				<SidebarSeparator />
				<Suspense fallback={<RecommendedSkeleton />}>
					<Recommended />
				</Suspense>
			</SidebarContent>
			<SidebarFooter>
				{user && (
					<SidebarMenu>
						<SidebarMenuItem>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<SidebarMenuButton>
										<User2 /> Profile
										<ChevronUp className='ml-auto' />
									</SidebarMenuButton>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									side='top'
									className='w-[--radix-popper-anchor-width]'
								>
									<DropdownMenuItem>
										<Link
											href={`u/${user?.username}`}
											className='flex items-center gap-2'
										>
											<User2 size={16} />
											<span>Account</span>
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Link href='/dashboard' className='flex items-center gap-2'>
											<Clapperboard size={16} />
											<span>Dashboard</span>
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<SignOutButton>
											<div className='flex items-center gap-2 cursor-pointer'>
												<LogOut size={16} />
												<span>Sign out</span>
											</div>
										</SignOutButton>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</SidebarMenuItem>
					</SidebarMenu>
				)}
			</SidebarFooter>
		</Sidebar>
	)
}
