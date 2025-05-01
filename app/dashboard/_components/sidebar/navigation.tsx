'use client'
import { dashboard_navigation_items } from '@/app/constants'
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
	const pathname = usePathname()
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Navigation</SidebarGroupLabel>
			<SidebarMenu>
				{dashboard_navigation_items.map(item => (
					<SidebarMenuItem
						key={item.title}
						className={cn(
							'rounded-md hover:bg-primary-foreground',
							pathname === item.route && 'bg-primary/40'
						)}
					>
						<SidebarMenuButton asChild>
							<Link href={item.route}>
								<item.icon />
								<div className='flex items-center gap-2'>
									<p className='text-sm font-medium'>{item.title}</p>
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
