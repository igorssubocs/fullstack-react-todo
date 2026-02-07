import React from 'react'
import { NavLink } from "react-router-dom"
import { Twitter, Github } from "lucide-react"
import todo from "../assets/todo.png"

const Header = () => {
	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" }
	]

	const socials = [
		{
			name: "X",
			icon: Twitter,
			path: "https://x.com/igorssubocs",
		},
		{
			name: "GitHub",
			icon: Github,
			path: "https://github.com/igorssubocs",
		},
	]

	return (
		<header className="container mx-auto py-5 px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
			<div className="flex justify-between items-center ">
				<NavLink to="/">
					<img src={todo} alt="" className="max-w-10 max-h-10" />
				</NavLink>

				<nav className="hidden md:flex gap-2 bg-white p-1 rounded-full">
					{navLinks.map((item) => (
						<NavLink
							key={item.name}
							to={item.path}
							className={({ isActive }) =>
								`px-10 py-5 rounded-full ${isActive ? "bg-gray-100" : "hover:text-green-500"}`
							}
							>
							{item.name}
						</NavLink>
					))}
				</nav>

				<ul className="flex gap-4">
					{socials.map((item) => {
						const Icon = item.icon;

						return (
							<li key={item.name}>
								<a
									href={item.path}
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-full hover:text-green-500 transition"
								>
									<Icon className="w-5 h-5" />
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		</header>
	)
}

export default Header