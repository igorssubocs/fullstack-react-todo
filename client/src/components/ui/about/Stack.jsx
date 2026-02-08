import React from 'react'
import StackIcon from "tech-stack-icons";

const TECH_STACK = [
	{ name: "vitejs", label: "Vite" },
	{ name: "js", label: "JavaScript" },
	{ name: "react", label: "React" },
	{ name: "tailwindcss", label: "Tailwind CSS" },
	{ name: "nodejs", label: "NodeJS" },
	{ name: "expressjs", label: "Express" },
	{ name: "mongodb", label: "MongoDB" },
	{ name: "git", label: "Git" },
	{ name: "github", label: "GitHub" },
	{ name: "reactrouter", label: "React Router" }
];

const Stack = () => {
	return (
		<article className="w-full">
			<ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white shadow-sm">
				{TECH_STACK.map((tech) => (
					<li 
						key={tech.name}
						className="flex justify-center items-center aspect-square p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl ring-1 ring-neutral-200 hover:ring-2 hover:ring-green-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
						title={tech.label}
						aria-label={tech.label}
					>
						<StackIcon 
							name={tech.name} 
							className='w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-200' 
						/>
					</li>
				))}
			</ul>
		</article>
	)
}

export default Stack