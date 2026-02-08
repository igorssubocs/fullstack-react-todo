import React from 'react'

const Banner = () => {
	const email = "igorssubocs@gmail.com"

	const handleContact = () => {
		window.location.href = `mailto:${email}`
	}

	return (
		<div className='bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-900 py-16 rounded-3xl px-5'>
			<div className='max-w-4xl mx-auto text-center'>
				<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5'>Let's Work Together</h2>
				<p className='text-white/90 text-lg mb-8 max-w-2xl mx-auto'>
					Have a project in mind? Let's discuss how I can help bring your ideas to life.
				</p>
				<button 
					onClick={handleContact}
					className='bg-white px-10 py-5 rounded-full font-medium hover:hover:text-green-500 hover:scale-105 transition-all duration-300'
				>
					Contact Me
				</button>
			</div>
		</div>
	)
}

export default Banner