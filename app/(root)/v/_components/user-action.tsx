'use client'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { DownloadIcon, Share2, ThumbsDown, ThumbsUp } from 'lucide-react'
import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	TelegramIcon,
	TelegramShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from 'react-share'

const UserAction = () => {
	return (
		<div className='flex items-center gap-x-2'>
			<div className='flex items-center'>
				<Button
					variant={'outline'}
					size={'sm'}
					className='rounded-full  rounded-r-none'
				>
					<ThumbsUp className='size-4' />
					<span className='text-sm'>Liked</span>
				</Button>
				<Button
					variant={'outline'}
					size={'sm'}
					className='rounded-full  rounded-l-none'
				>
					<ThumbsDown className='size-4' />
				</Button>
			</div>
			<Dialog>
				<DialogTrigger asChild>
					<Button className='rounded-full' size={'sm'} variant={'outline'}>
						<Share2 className='size-4' />
						<span className='text-sm'>Share</span>
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className='text-center text-2xl font-bold'>
							Share
						</DialogTitle>
					</DialogHeader>
					<div className='flex items-center space-x-2 justify-center'>
						<TelegramShareButton
							url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/v/1`}
						>
							<TelegramIcon className='rounded-full size-10' />
						</TelegramShareButton>
						<WhatsappShareButton
							url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/v/1`}
						>
							<WhatsappIcon className='rounded-full size-10' />
						</WhatsappShareButton>
						<FacebookShareButton
							url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/v/1`}
						>
							<FacebookIcon className='rounded-full size-10' />
						</FacebookShareButton>
						<TwitterShareButton
							url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/v/1`}
						>
							<TwitterIcon className='rounded-full size-10' />
						</TwitterShareButton>
						<EmailShareButton url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/v/1`}>
							<EmailIcon className='rounded-full size-10' />
						</EmailShareButton>
					</div>
				</DialogContent>
			</Dialog>
			<Button variant={'outline'} size={'sm'} className='rounded-full'>
				<DownloadIcon className='size-4' />
				<span className='text-sm'>Download</span>
			</Button>
		</div>
	)
}
export default UserAction
