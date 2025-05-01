import { SidebarProvider } from '@/components/ui/sidebar'
import { ChildProps } from '@/types'
import AppNavbar from '../(root)/_components/navbar/app-navbar'
import DashboardSidebar from './_components/sidebar/dashboard-sidebar'

const Layout = ({ children }: ChildProps) => {
	return (
		<SidebarProvider>
			<DashboardSidebar />
			<main className='w-full h-full'>
				<AppNavbar />
				<div className='container mx-auto'>{children}</div>
			</main>
		</SidebarProvider>
	)
}

export default Layout
