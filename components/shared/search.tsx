'use client'
import { SearchIcon, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import qs from 'query-string'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const Search = () => {
	const [term, setTerm] = useState('')

	const router = useRouter()

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const url = qs.stringifyUrl(
			{
				url: '/search',
				query: {
					term,
				},
			},
			{ skipEmptyString: true, skipNull: true }
		)
		router.push(url)
	}
	return (
		<form
			onSubmit={onSubmit}
			className='flex items-center lg:w-1/3 max-w-full relative '
		>
			<Input
				type='text'
				placeholder='Search'
				className='rounded-r-none focus-visible:ring-0 '
				value={term}
				onChange={e => setTerm(e.target.value)}
			/>
			{term && (
				<X
					onClick={() => setTerm('')}
					size={16}
					className='absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer'
				/>
			)}
			<Button
				type='submit'
				variant='secondary'
				size='icon'
				className='rounded-l-none '
			>
				<SearchIcon />
			</Button>
		</form>
	)
}

export default Search
