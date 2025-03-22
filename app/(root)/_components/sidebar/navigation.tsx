'use client'
import { navigation_items } from '@/app/constants'
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navigation = () => {
	const pathname = usePathname()
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Navigation</SidebarGroupLabel>
			<SidebarMenu>
				{navigation_items.map(item => (
					<SidebarMenuItem key={item.label}>
						<SidebarMenuButton asChild isActive={pathname === item.href}>
							<Link href={item.href}>
								<item.icon />
								<div className='flex items-center gap-2'>
									<p className='text-sm font-medium'>{item.label}</p>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	)
}
export default Navigation
