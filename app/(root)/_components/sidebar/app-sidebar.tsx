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
import { ChevronUp, Clapperboard, LogOut, User2 } from 'lucide-react'
import Link from 'next/link'
import Following from './following'
import Navigation from './navigation'
import Recommended from './recommended'

export function AppSidebar() {
	return (
		<Sidebar collapsible='icon'>
			<SidebarHeader />
			<SidebarContent>
				<Navigation />
				<SidebarSeparator />
				<Following />
				<SidebarSeparator />
				<Recommended />
			</SidebarContent>
			<SidebarFooter>
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
									<Link href='/u/username' className='flex items-center gap-2'>
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
									<LogOut size={16} />
									<span>Sign out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
