import { useEffect } from 'react'
import { blockstackAPI } from '../api'
import { useRouter } from 'next/router'

const LoggedIn = () => {
	const router = useRouter()

	useEffect(() => {
		if(!blockstackAPI.session.isUserSignedIn()) {
			router.replace('/login')
		}
	})

	return (
		<div></div>
	)
}

export default LoggedIn