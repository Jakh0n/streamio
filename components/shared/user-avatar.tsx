import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Avatar, AvatarImage } from '../ui/avatar'

const avatarVariants = cva('', {
	variants: {
		size: {
			default: 'size-8',
			sm: 'size-6',
			md: 'size-10',
			lg: 'size-14',
			xl: 'size-20',

			'2xl': 'size-28',
		},
		variant: {
			default: 'rounded-full',
			square: 'rounded-md',
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
})

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
	label: string
	avatar: string
	isLive?: boolean
	showBadge?: boolean
	className?: string
}

const UserAvatar = ({
	avatar,
	label,
	size,
	variant,
	isLive,
	showBadge,
	className,
}: UserAvatarProps) => {
	return (
		<div className={cn('relative', className)}>
			<Avatar
				className={cn(
					isLive && 'ring-2 ring-red-500 border border-primary',
					avatarVariants({ size, variant })
				)}
			>
				<AvatarImage src={avatar} />
				{/* <AvatarFallback className='uppercase'>
					{label[label.length - 1]}
				</AvatarFallback> */}
			</Avatar>
			{showBadge && isLive && (
				<div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'>
					<div className='bg-red-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-primary  font-space_grotesk font-bold tracking-wide'>
						Live
					</div>
				</div>
			)}
		</div>
	)
}
export default UserAvatar
