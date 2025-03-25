import { ChildProps } from '@/types'
import Image from 'next/image'

const Layout = ({ children }: ChildProps) => {
	return (
		<div className=' max-w-6xl mx-auto flex items-center h-screen w-full justify-center'>
			<div className='grid grid-cols-2 gap-10'>
				<div className='hidden md:block '>
					<Image
						src='/login-up.png'
						alt='auth-bg'
						width={400}
						height={400}
						className='w-full h-full object-cover'
					/>
				</div>
				<div className=''>{children}</div>
			</div>
		</div>
	)
}

export default Layout
