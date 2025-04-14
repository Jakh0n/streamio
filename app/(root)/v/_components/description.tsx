const Description = () => {
	return (
		<div className='flex flex-col items-start gap-y-2 bg-secondary rounded-lg p-4 mt-4'>
			<div className='flex items-center space-x-2'>
				<p className='text-sm text-muted-foreground'>1,223 views</p>
				<div className='rounded-full bg-muted-foreground w-1 h-1' />
				<p className='text-sm text-muted-foreground'>1 day ago</p>
			</div>
			<p className='text-md font-semibold leading-none'>Description</p>
			<p className='text-sm text-muted-foreground line-clamp-3'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, quia
				corrupti odio officiis eius sint ipsa voluptate alias rem iusto, culpa
				facilis esse corporis dolores, quo aliquid et. Ipsum eius sint maiores
				vero sed, possimus saepe aliquam, quaerat laboriosam voluptatum totam
				dolor. Omnis magni numquam consequuntur! Vitae dicta delectus fuga at!
				Deleniti commodi veritatis facilis, molestiae rem beatae quasi sunt,
			</p>
		</div>
	)
}

export default Description
