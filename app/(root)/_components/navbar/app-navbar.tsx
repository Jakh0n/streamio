import Actions from '@/components/shared/actions'
import Logo from '@/components/shared/logo'
import Search from '@/components/shared/search'
const AppNavbar = () => {
	return (
		<div className='w-full h-20 bg-sidebar px-2 lg:px-4 '>
			<div className='flex items-center justify-between h-full w-full'>
				<Logo />
				<Search />
				<Actions />
			</div>
		</div>
	)
}

export default AppNavbar
