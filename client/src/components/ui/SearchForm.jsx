import { Search } from 'lucide-react'
import { useState } from 'react'

const SearchForm = ({ onSearch }) => {
	const [query, setQuery] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		onSearch(query)
	}

	const handleClear = () => {
		setQuery('')
		onSearch('')
	}

	return (
		<form onSubmit={handleSubmit} className="p-5 bg-white rounded-3xl">
			<div className="relative">
				<Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search tasks..."
					className="w-full py-4 pl-12 pr-4 rounded-xl ring-1 ring-neutral-200 focus:ring-2 focus:ring-green-500 outline-none"
				/>
				{query && (
					<button
						type="button"
						onClick={handleClear}
						className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-2xl"
					>
						×
					</button>
				)}
			</div>
		</form>
	)
}

export default SearchForm