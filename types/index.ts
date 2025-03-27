export interface ChildProps {
	children: React.ReactNode
}
export interface User {
	label: string
	avatar: string
	followedBy: number
}

export interface FollowingResponse {
	following: User[]
}
export interface RecommendedResponse {
	recommended: User[]
}
