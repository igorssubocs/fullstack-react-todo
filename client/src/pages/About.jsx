import Banner from "../components/ui/about/Banner"
import Stack from "../components/ui/about/Stack"

const About = () => {
	return (
		<section className="w-full">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
				<article className="space-y-6">
					<div>
						<h1 className="text-4xl font-bold mb-5 text-neutral-800">Task Manager Application</h1>
						<p className="text-lg leading-relaxed mb-5">
							Front End Developer with expertise in building modern, responsive web applications. 
							Passionate about creating intuitive user experiences and writing clean, maintainable code.
						</p>
					</div>
				</article>
				<Stack />
			</div>
			<Banner />
		</section>
	)
}

export default About