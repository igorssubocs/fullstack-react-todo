import { useState } from "react"
import Button from "./Button"

const Task = ({ onTaskCreated }) => {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!title.trim() || !description.trim()) return

		try {
			const response = await fetch('http://localhost:5000/api/tasks', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title, description })
			})
			
			const newTask = await response.json()
			onTaskCreated(newTask)
			setTitle("")
			setDescription("")
		} catch (error) {
			console.error('Error creating task:', error)
		}
	}

	return (
		<div className="p-5 bg-white space-y-5 rounded-3xl">
			<form onSubmit={handleSubmit} className="space-y-5">
				<input 
					type="text" 
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Write task name"
					className="p-5 w-full rounded-xl ring-1 ring-neutral-200 focus:ring-green-500 outline-none"
				/>
				<input 
					type="text" 
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Write task description" 
					className="p-5 w-full rounded-xl ring-1 ring-neutral-200 focus:ring-green-500 outline-none"
				/>
				<Button type="submit" />
			</form>
		</div>
	)
}

export default Task