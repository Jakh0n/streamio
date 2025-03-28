interface UsernamePageProps {
	params: Promise<{ label: string }>
}

const UserNamePage = async ({ params }: UsernamePageProps) => {
	const { label } = await params
	return <div>{label}</div>
}

export default UserNamePage
