import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ChildProps } from '@/types'
import { AppSidebar } from './_components/sidebar/app-sidebar'

const Layout = ({ children }: ChildProps) => {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main>
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	)
}

export default Layout
