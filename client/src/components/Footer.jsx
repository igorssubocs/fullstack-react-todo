import { NavLink } from "react-router-dom"

const Footer = () => {
	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" }
	]
	
	return (
		<footer className="container grid justify-center mx-auto py-5 px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
			<p className='text-sm'>&copy; 2026 mern todo list. all rights reserved.</p>
		</footer>
	)
}

export default Footer