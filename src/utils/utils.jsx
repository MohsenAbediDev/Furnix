import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ResetPageScroll = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

export const isGithubPages = () => {
	return window.location.hostname === 'mohsenabedidev.github.io'
}

export const calculateTotalPrice = (items) => {
	return (
		items?.reduce(
			(total, item) => total + Number(item.price) * item.quantity,
			0
		) || 0
	)
}

export default ResetPageScroll
