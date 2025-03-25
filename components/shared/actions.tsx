import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { LogIn } from 'lucide-react'
import { Button } from '../ui/button'
import { SidebarTrigger } from '../ui/sidebar'
import ModeToggle from './mode-toggle'

const Actions = () => {
	return (
		<div className='flex items-center gap-2'>
			<ModeToggle />
			<SidebarTrigger />
			<SignedOut>
				<SignInButton mode={'modal'}>
					<Button className='px-4 py-2' variant='secondary' size='sm'>
						<span className='max-md:hidden'>Sign In</span>
						<LogIn className='size-4 ' />
					</Button>
				</SignInButton>
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</div>
	)
}

export default Actions
