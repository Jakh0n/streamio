import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ChildProps } from '@/types'
import AppNavbar from './_components/navbar/app-navbar'
import { AppSidebar } from './_components/sidebar/app-sidebar'

const Layout = ({ children }: ChildProps) => {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className='w-full h-full'>
				<AppNavbar />
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	)
}

export default Layout
