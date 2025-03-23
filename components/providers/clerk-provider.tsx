'use client'
import { ClerkProvider as Clerk } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'
import React from 'react'
const ClerkProvider = ({ children }: { children: React.ReactNode }) => {
	const { resolvedTheme } = useTheme()
	return (
		<Clerk
			appearance={{
				baseTheme: resolvedTheme === 'dark' ? dark : undefined,
			}}
		>
			{children}
		</Clerk>
	)
}

export default ClerkProvider
